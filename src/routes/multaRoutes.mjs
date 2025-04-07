import express from 'express';
import {
  getAllMultas,
  imposeMultaMora,
  imposeMultaDanios,
  imposeMultaPerdida
} from '../controllers/multaController.mjs';

const router = express.Router();

// Ruta para consultar todas las multas
router.get('/', getAllMultas);

// Rutas para imponer multas según el tipo
router.post('/mora', imposeMultaMora);
router.post('/danios', imposeMultaDanios);
router.post('/perdida', imposeMultaPerdida);

export default router;
