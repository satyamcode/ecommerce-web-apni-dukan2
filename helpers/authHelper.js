import bcrypt from 'bcrypt'
export const hashPassword=async(password)=>{
    try {
        const satlRounds=10;
        const hashedPassword= await bcrypt.hash(password,satlRounds);
        return hashedPassword;
    }
    catch (error){
        console.log(error);
    }
};
export const camparePassword=async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}