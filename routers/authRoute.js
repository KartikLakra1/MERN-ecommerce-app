import express from 'express';
import {registerController , loginController , testController , forgotpasswordController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// router object
const router = express.Router();

// routes congiguration
// register || METHOD POST 
router.post('/register' , registerController);

// LOGIN || post
router.post('/login' , loginController);

// Forget password
router.post('/forgot-password' , forgotpasswordController);

// test routes
router.get('/test', requireSignIn, isAdmin ,testController);

//protected route Auth
router.get("/user-auth" , requireSignIn , (req , res) => {
    res.status(200).send({ok : true});
})

export default router;