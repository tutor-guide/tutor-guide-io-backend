"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Get arguments passed on command line
const clientModel = require("./models/client");
const tutorModel = require("./models/tutor");
const caseModel = require("./models/case");
const clients = [];
const tutors = [];
const cases = [];
mongoose_1.default.set("strictQuery", false);
const mongoDB = "mongodb+srv://admin:ttg09112020@tutorguide.1qpji6l.mongodb.net/?retryWrites=true&w=majority";
main().catch((err) => console.log(err));
async function main() {
    console.log("connecting to MongoDB");
    await mongoose_1.default.connect(mongoDB);
    console.log("Should be connected");
    await createClients();
    console.log("Closing connection");
    mongoose_1.default.connection.close();
}
async function createClient(gender, first_Name, contact_number) {
    const client3 = new clientModel({
        gender: gender,
        first_name: first_Name,
        contact_number: contact_number,
    });
    await client3.save();
    console.log("done! added first client");
    clients.push(client3);
    console.log(`Added Client: ${first_Name}`);
}
async function createClients() {
    console.log('adding client');
    await createClient('Female', "Wenny", "55414284");
}
