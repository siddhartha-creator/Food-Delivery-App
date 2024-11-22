import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://khatrisiddhartha453:root123@cluster0.mdgfp.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}