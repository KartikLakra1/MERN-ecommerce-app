import bcrypt from 'bcrypt';

// bcrypting / hashing the password for security concerns
export const hashPassword = async(password) => {
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password , saltRounds);
        return hashedPassword;
    }catch(error){
        console.log(error);
    }
}

// comparing the hashedPassword with the entered password
export const comparePassword = async (password , hashedPassword) => {
    return bcrypt.compare(password , hashedPassword);
}