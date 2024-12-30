import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`);
        console.log('Database connected');
        
    } catch (error) {
        throw new Error("Database connection failure",error.message);
        
    }
}