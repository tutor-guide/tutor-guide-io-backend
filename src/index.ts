import "./loadEnvironment.js"
// this project refers to https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial

import express from "express";
import { conn } from "./db/conn.js";

const PORT = process.env.PORT || 3001;

const app = express()

app.get("/", (req, res)=> {
    res.json({message: "Hello World!"})
})

// app.use("/cases", cases)

app.listen(PORT, () =>{
    console.log(`Server listening on ${PORT}`)
})

conn().catch((err)=> console.log(err))