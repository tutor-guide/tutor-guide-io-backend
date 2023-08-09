import mongoose from "mongoose";

const connectionString = "mongodb+srv://admin:ttg09112020@tutorguide.1qpji6l.mongodb.net/?retryWrites=true&w=majority";


mongoose.set("strictQuery", false)


export async function conn(){
    try {
        await mongoose.connect(connectionString)
        console.log("Connected!")
    } catch (error) {
        console.error(error)
    } 
    
}