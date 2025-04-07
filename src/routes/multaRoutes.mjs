import express from 'express';
import {
  getAllMultas,
  imposeMultaMora,
  updateMulta,
  deleteMulta
} from '../controllers/multaController.mjs';

const router = express.Router();
// Ruta para consultar todas las multas
router.get('/', getAllMultas);
// Rutas para imponer multas
router.post('/', imposeMultaMora);
// Actualizar multa (PATCH)
router.patch('/:id', updateMulta);
// Eliminar multa (DELETE)
router.delete('/:id', deleteMulta);

export default router;
