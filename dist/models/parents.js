import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ClientSchema = new Schema({
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    first_name: { type: String },
    last_name: { type: String, required: true },
});
