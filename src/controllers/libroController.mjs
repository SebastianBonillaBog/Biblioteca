
import pool from "../database/connection.mjs";


//Consultar todo
export const getAllLibro = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM Libro');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };  


// Crear un nuevo
export const createLibro = async (req, res) => {
    const { nombre, autor, editorial, año, ubicación, edicion, genero, descripcion, condicion} = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO libro (nombre, autor, editorial, año, ubicación, edicion, genero, descripcion, condicion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, autor, editorial, año, ubicación, edicion, genero, descripcion, condicion]
      );
      res.status(201).json({ id: result[0].insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  