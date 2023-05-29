import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || "";

mongoose.set("strictQuery", false)


export async function conn(){
    await mongoose.connect(connectionString)
}