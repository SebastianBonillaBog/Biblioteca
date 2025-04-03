import express from 'express';

import {
    getAllPrestamos,
    getPrestamoById,
    createPrestamo,
    updatePrestamo,
    deletePrestamo,
    patchPrestamo,
  } from '../controllers/prestamoController.mjs';
  

  const router = express.Router();
  router.get('/', getAllPrestamos);
  router.get('/:id_prestamo', getPrestamoById);
  router.post('/', createPrestamo);
  router.put('/:id_prestamo', updatePrestamo);
  router.patch('/:id_prestamo', patchPrestamo);
  router.delete('/:id_prestamo', deletePrestamo);

  export default router;
