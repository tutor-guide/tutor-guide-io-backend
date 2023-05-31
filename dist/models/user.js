"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    username: { type: String, required: true, max_length: 30 },
    password: { type: String, required: true, min_length: 8 },
});
module.exports = mongoose_1.default.model("User", UserSchema);
