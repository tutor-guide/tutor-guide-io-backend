import "./loadEnvironment.js"
// this project refers to https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial

import express from "express";
import { conn } from "./db/conn.js";
import bodyParser from "body-parser";

var indexRouter = require("./routes/index")
// var usersRouter = require("./routes/users")
const adminRouter = require("./routes/admin")

const PORT = process.env.PORT || 3001;
const app = express()

app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", indexRouter)
// app.use("/users", usersRouter)
app.use("/admin", adminRouter)

// app.use("/cases", cases)

app.listen(PORT, () =>{
    console.log(`Server listening on http://localhost:${PORT}`)
})

conn()