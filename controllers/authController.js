import userModel from '../models/userModel.js';
import { hashPassword } from './../helpers/authHelper.js';

export const registerController = async(req,res) => {
    try{
        const {name, email , password , phone , address} = req.body;
        // validations
        if(!name){
            res.send({error : 'Name is required'})
        }
        if(!email){
            res.send({error : 'email is required'})
        }
        if(!password){
            res.send({error : 'password is required'})
        }
        if(!phone){
            res.send({error : 'phone no. is required'})
        }
        if(!address){
            res.send({error : 'address is required'})
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

