import pool from "../database/connection.mjs";

// Consultar todas las multas
export const getAllMultas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM multa');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Imponer multa por mora
// Se espera en el body: { Valor_multa, id_usuario}
export const imposeMultaMora = async (req, res) => {
  const { Valor_multa, id_usuario } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO multa (Valor_multa, id_usuario) VALUES (?, ?)',
      [Valor_multa, id_usuario]
    );
    res.status(201).json({ id_multa: result[0].insertId, Valor_multa });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





