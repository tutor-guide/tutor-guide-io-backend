import mongoose from "mongoose";
// Get arguments passed on command line

const clientModel = require("./models/client")
const tutorModel = require("./models/tutor")
const caseModel = require("./models/case")

const clients = [];
const tutors = [];
const cases = [];

mongoose.set("strictQuery", false)
const mongoDB = "mongodb+srv://admin:ttg09112020@tutorguide.1qpji6l.mongodb.net/?retryWrites=true&w=majority"

main().catch((err)=> console.log(err))

async function main() {
    console.log("connecting to MongoDB")
    await mongoose.connect(mongoDB)
    console.log("Should be connected")
    await createClients()
    console.log("Closing connection")
    mongoose.connection.close()
}

async function createClient(gender: string, first_Name: string, contact_number: string  ) {
    const client3 = new clientModel({
        gender: gender,
        first_name: first_Name,
        contact_number: contact_number,
    }) 
    await client3.save()
    console.log("done! added first client")
    clients.push(client3)
    console.log(`Added Client: ${first_Name}`)
}

async function createClients(){
    console.log('adding client')
    await createClient('Female', "Wenny", "55414284")
}