import pool from "../database/connection.mjs"

//Obtener todos los registros
export const getAllPrestamos = async (req,res) => {
    try {
        const[rows] = await pool.query("SELECT * FROM prestamo");
        res.json(rows);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

//Obtener un registro por identificacion

export const getPrestamoByIdentificacion = async (req,res) => {
    const {identificacion} = req.params;
    try{
        const [rows] = await pool.query('SELECT * FROM prestamo WHERE identificacion = ?', [identificacion])
        if(rows.length === 0){
            return res.status(404).json({message: 'No hay coincidencias'})
        }
        res.json(rows[0])
    } catch(error){
        res.status(500).json({ error: error.message });
    }
};

//Crear un nuevo prestamo
export const createPrestamo = async (req, res) => {
    const {identificacion, nombreLibro, fechaPrestamo } = req.body;
    try{
        const result = await pool.query(
            'INSERT INTO prestamo (identificacion, nombrelibro, fechaPrestamo) VALUES (?, ?, ?)',
        [identificacion,nombreLibro, fechaPrestamo]
        );
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

//Actualizar un registro PUT
export const updatePrestamo = async (req, res) => {
    const { id } = req.params;
    const {identificacion, nombreLibro, fechaPrestamo } = req.body;
    try {
      const result = await pool.query(
        'UPDATE prestamo SET identificacion = ?, nombreLibro=?, fechaPrestamo=? WHERE id = ?',
        [identificacion, nombreLibro, fechaPrestamo, id]
      );
      if (result[0].affectedRows === 0) {
        return res.status(404).json({ message: 'Prestamo no encontrado' });
      }
      res.json({ message: 'Prestamo actualizado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

//Eliminar un prestamo
export const deletePrestamo = async (req,res) =>{
    const {id} = req.params;
    try{
        const result = await pool.query('DELETE FROM prestamo WHERE id = ?', [id])
        if (result[0].affectedRows === 0) {
            return res.status(404).json({ message: 'Prestamo no encontrado' });
        }
        res.status(204).send()
    }catch(error){
        resizeTo.status(500).json({error: error.message})
    }
};

// Actualización parcial (PATCH)
export const patchPrestamo = async (req, res) => {
    const { id } = req.params;
    const updates = req.body; // Solo envía los campos que quieres actualizar
    try {
      const result = await pool.query('UPDATE prestamo SET ? WHERE id = ?', [updates, id]);
      if (result[0].affectedRows === 0) {
        return res.status(404).json({ message: 'Prestamo no encontrado' });
      }
      res.json({ message: 'Prestamo actualizada parcialmente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  

