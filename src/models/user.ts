import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, max_length: 30},
    password: {type: String, required: true, min_length: 8},
})

module.exports = mongoose.model("User", UserSchema)