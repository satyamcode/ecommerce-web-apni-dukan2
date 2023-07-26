import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type :String,
        required:true,
        trime:true  //for ignoreing white space

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:{},
        required:true,

    },
    address:{
        type:String,
        required:true
    },
    answer:{
        type :String,
        required:true,
    },
    role:{
        type:Number,
        default:0
    }



},{timestamps:true})  //when user signup his signup time record
export default mongoose.model('users',userSchema)