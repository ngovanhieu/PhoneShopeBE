import express from 'express';
import authControllers from '../controllers/auth.controller.js';
const router = express.Router();
//route login
router.post('/login', authControllers.login);
//route register
router.post('/register', authControllers.register);
router.post('/admin/register',authControllers.register);
router.delete('/:id',authControllers.delete);
router.patch('/:id/edit' ,authControllers.update);
export default router;