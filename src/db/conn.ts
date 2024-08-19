import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI;


mongoose.set("strictQuery", false)


export async function conn(){

    if (!connectionString) {
        console.log("ATLAS_URI (MongoDB URL) is null. Please check your .env file");
        return;
    }

    try {
        await mongoose.connect(connectionString)
        console.log("Connected!")
    } catch (error) {
        console.error(error)
    } 
    
}