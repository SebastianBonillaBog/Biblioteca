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
// Se espera en el body: { id_usuario, diasMora }
// Por ejemplo, se cobra 1 unidad de moneda por cada día de atraso.
export const imposeMultaMora = async (req, res) => {
  const { id_usuario, diasMora } = req.body;
  const ratePerDay = 1; // Valor de multa por día (puedes ajustarlo)
  const Valor_multa = diasMora * ratePerDay;

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

// Imponer multa por daños en la devolución
// Se espera en el body: { id_usuario, montoDanios }
export const imposeMultaDanios = async (req, res) => {
  const { id_usuario, montoDanios } = req.body;
  const Valor_multa = montoDanios;

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

// Imponer multa por pérdida del libro
// Se espera en el body: { id_usuario, montoPerdida }
export const imposeMultaPerdida = async (req, res) => {
  const { id_usuario, montoPerdida } = req.body;
  const Valor_multa = montoPerdida;

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
