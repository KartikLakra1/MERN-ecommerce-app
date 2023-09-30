import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from './../helpers/authHelper.js';
// import { registerController } from './authController';
import JWT from 'jsonwebtoken';

export const registerController = async(req,res) => {
    try{
        const {name, email , password , phone , address} = req.body;
        // validations
        if(!name){
            res.send({message : 'Name is required'})
        }
        if(!email){
            res.send({message : 'email is required'})
        }
        if(!password){
            res.send({message : 'password is required'})
        }
        if(!phone){
            res.send({message : 'phone no. is required'})
        }
        if(!address){
            res.send({message : 'address is required'})
        }

        // check user
        const existingUer = await userModel.findOne({email});
        // existing user
        if(existingUer){
            return res.status(200).send({
                success : true,
                message : "Already Registed please  login"
            })
        }

        // Register user
        const hashpassword = await hashPassword(password);
        // save
        const user = await new userModel({name,email,phone,address,password:hashpassword}).save();

        res.status(201).send({
            success : true,
            message : 'User successfully Registered',
            user
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Registeration",
            error
        })
    }
}

// login 
export const loginController = async(req,res) => {
    try{
        const {email , password} = req.body;

        // validations
        if(!email || !password){
            return res.status(404).send({
                success : false,
                message : "Invalid email or password"
            })
        }

        // check userexists
        const user =  await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success : false,
                message : "email is not registered"
            })
        }

        const match = await comparePassword(password , user.password);
        if(!match){
            return res.status(200).send({
                success : false,
                message : "Invalid Password"
            })
        }

        // Create token
        const token = await JWT.sign(
            { _id : user._id },
            process.env.JWT_SECRET,
            {expiresIn : "7d"}
        )

        res.status(200).send({
            success : true,
            message : "login successfully",
            user:{
                name : user.name,
                email : user.email,
                phone : user.phone,
                address : user.address,
            },
            token
        })


    }catch(error){
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in login",
            error
        })
    }
}


// testController

export const testController = async (req,res) => {
    await res.send('protected route');
}
