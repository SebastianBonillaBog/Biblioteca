
import pool from "../database/connection.mjs";


//Consultar todo
export const getAllLibro = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM libro');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };  


// Crear un nuevo
export const createLibro = async (req, res) => {
    const { nombre, año, ubicacion, edicion, descripcion, condicion, id_editorial, id_genero} = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO libro (nombre, año, ubicacion, edicion, descripcion, condicion, id_editorial, id_genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, año, ubicacion, edicion, descripcion, condicion, id_editorial, id_genero]
      );
      res.status(201).json({ id: result[0].insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



  