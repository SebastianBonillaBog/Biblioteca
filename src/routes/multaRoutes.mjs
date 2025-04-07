import express from 'express';
import {
  getAllMultas,
  imposeMultaMora,
} from '../controllers/multaController.mjs';

const router = express.Router();
// Ruta para consultar todas las multas
router.get('/', getAllMultas);
// Rutas para imponer multas
router.post('/mora', imposeMultaMora);

export default router;
