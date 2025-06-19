import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://diwarenr:Namrata23@cluster0.33azili.mongodb.net/food-ordering-project').then(()=>{
console.log("db connected");

    })

}