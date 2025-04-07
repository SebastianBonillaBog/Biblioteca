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


// Actualizar libro
export const createLibro = async (req, res) => {
    const { nombre, año, ubicacion, edicion, descripcion, condicion, id_editorial, id_genero} = req.body;
    try {
      const result = await pool.query(
        'Insert into libro  (nombre, año, ubicacion, edicion, descripcion, condicion, id_editorial, id_genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, año, ubicacion, edicion, descripcion, condicion, id_editorial, id_genero]
      );
      res.status(201).json({ id: result[0].insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


//Obtener un registro por id

export const getLibroById = async (req,res) => {
  const {id_libro} = req.params;
  try{
      const [rows] = await pool.query('SELECT * FROM libro WHERE id_libro = ?', [id_libro])
      if(rows.length === 0){
          return res.status(404).json({message: 'No hay coincidencias'})
      }
      res.json(rows[0])
  } catch(error){
      res.status(500).json({ error: error.message });
  }
};
  

// Actualizar un registro PUT
export const updateLibro = async (req, res) => {
  const { id_libro } = req.params;
  const { nombre, año, ubicacion, edicion, descripcion, condicion, id_editorial, id_genero } = req.body;
  
  try {
    const result = await pool.query(
      'UPDATE libro SET nombre = ?, año = ?, ubicacion = ?, edicion = ?, descripcion = ?, condicion = ?, id_editorial = ?, id_genero = ? WHERE id_libro = ?',
      [nombre, año, ubicacion, edicion, descripcion, condicion, id_editorial, id_genero, id_libro] 
    );
    if (result[0].affectedRows === 0) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.json({ message: 'libro actualizadó' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Eliminar un Libro DELETE
export const deleteLibro = async (req, res) => {
  const { id_libro } = req.params;
  try {
    const result = await pool.query('DELETE FROM libro WHERE id_libro = ?', [id_libro]);
    if (result[0].affectedRows === 0) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(204).send(); // Devuelve un código 204 sin contenido
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualización parcial de libro (PATCH)
export const patchPrestamo = async (req, res) => {
  const { id_libro } = req.params;
  const updates = req.body; // Solo envía los campos que quieres actualizar
  try {
    const result = await pool.query('UPDATE libro SET ? WHERE id_libro = ?', [updates, id_libro]);
    if (result[0].affectedRows === 0) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json({ message: 'Libro actualizada parcialmente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
