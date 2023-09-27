import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRouter from './routers/authRoute.js';


// congigure export const exportVariable = localVariable;
dotenv.config();

// database config
connectDB();


// rest object
const app = express();

// middleWare
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth' , authRouter);

// rest api
app.get( '/' , (req,res) => {
    res.send({
        message : "Maman and mukesh"
    })
})

// PORT
const PORT = process.env.PORT || 8000;


// run listen
app.listen( PORT , () => {
    console.log(`Server running on mode ${process.env.DEV_MODE} and port ${PORT}`.bgMagenta.white);
})