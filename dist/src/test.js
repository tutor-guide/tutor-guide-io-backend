"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Get arguments passed on command line
const userArgs = process.argv.slice(2);
const clients = require("./models/clients");
// const tutors = require("./models/tutors")
// const cases = require("./models/cases")
console.log(clients);
mongoose_1.default.set("strictQuery", false);
const mongoDB = userArgs[0];
console.log(userArgs);
