import express from 'express';

import {
    getAllPrestamos,
    getPrestamoByIdentificacion,
    createPrestamo,
    updatePrestamo,
    deletePrestamo,
    patchPrestamo,
  } from '../controllers/prestamoController.mjs';
  

  const router = express.Router();
  router.get('/', getAllPrestamos);
  router.get('/:id', getPrestamoByIdentificacion);
  router.post('/', createPrestamo);
  router.put('/:id', updatePrestamo);
  router.patch('/:id', patchPrestamo);
  router.delete('/:id', deletePrestamo);

  export default router;
