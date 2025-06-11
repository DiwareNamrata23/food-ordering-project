import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{type:String,requires:true},
    email:{type:String,requires:true,unique:true},
    password:{type:String,requires:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

const userModel=mongoose.models.user||mongoose.model("user",userSchema);
export default userModel