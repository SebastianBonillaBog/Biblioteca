import express from 'express';

  import {
    
    createLibro,
    getAllLibro
  
  } from '../controllers/libroController.mjs';

const router = express.Router();
router.get('/', getAllLibro);
router.post('/', createLibro);

export default router;