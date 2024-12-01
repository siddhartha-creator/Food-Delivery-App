import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('your api from mongodb').then(()=>console.log("DB Connected"));
}
