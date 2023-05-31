"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ClientSchema = new Schema({
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    first_name: { type: String, required: true },
    last_name: { type: String },
    contact_number: { type: String, required: true, selected: false },
    cases: [{ type: Schema.Types.ObjectId, ref: "Case" }],
});
ClientSchema.virtual("full_name").get(function () {
    let full_name = "";
    full_name = this.first_name + this.last_name;
    return full_name;
});
ClientSchema.virtual("url").get(function () {
    return `/client/${this._id}`;
});
module.exports = mongoose_1.default.model("Client", ClientSchema);
