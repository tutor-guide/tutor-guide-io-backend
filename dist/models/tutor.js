"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorModel = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var resultSchema = new mongoose_1.default.Schema({
    subject: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Subject" },
    dseResult: { type: Number, required: true, min: 0, Max: 7 },
});
var TutorSchema = new mongoose_1.Schema({
    status: { type: String, required: true, enum: ["available", "unavailable"] },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    first_name: { type: String },
    last_name: { type: String, required: true },
    tutorID: { type: Number, required: true },
    subject: [resultSchema],
    language: {
        type: String,
        required: true,
        enum: ["Cantonese", "English", "Mandarin"],
    },
    experience: { type: String, required: true },
    self_intro: { type: String, required: true },
    education_qualification: { type: String, required: true },
    time_available: { type: String, required: true },
    tuition_location: { type: String, required: true },
    min_salary: { type: Number, required: true },
    max_salary: { type: Number },
    cases: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Case" }],
    //private field
    contact_number: { type: String, required: true, selected: false },
    media_channel: {
        type: String,
        required: true,
        enum: ["FB", "IG", "Goop", "Frd/Fam", "Google"],
    },
});
TutorSchema.virtual("url").get(function () {
    return "/tutor/".concat(this._id);
});
var TutorModel = mongoose_1.default.model("Tutor", TutorSchema);
exports.TutorModel = TutorModel;
