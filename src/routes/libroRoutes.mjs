import express from 'express';

import {
    
    createLibro,
    deleteLibro,
    getAllLibro,
    getLibroById,
    updateLibro,
    patchPrestamo

    
  
  } from '../controllers/libroController.mjs';

 const router = express.Router();
 router.get('/', getAllLibro);
 router.post('/', createLibro);
 router.get('/:id_libro', getLibroById);
 router.put('/:id_libro', updateLibro);
 router.delete ('/:id_libro', deleteLibro);
 router.patch('/:id_libro', patchPrestamo);

export default router;