import express from 'express';
import {registerController , loginController} from '../controllers/authController.js'

// router object
const router = express.Router();

// routes congiguration
// register || METHOD POST 
router.post('/register' , registerController);

// LOGIN || post
router.post('/login' , loginController);

export default router;