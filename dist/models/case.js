"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_2 = require("mongoose");
var CaseSchema = new mongoose_2.Schema({
    status: { type: String, requried: true, enum: ["open", "closed"] },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    year_of_study: { type: String, required: true },
    subject: [{ type: mongoose_2.Schema.Types.ObjectId, required: true, ref: "Subject" }],
    caseID: { type: Number, required: true },
    language: {
        type: String,
        required: true,
        enum: ["Cantonese", "English", "Mandarin"],
    },
    exam_language: { type: String, required: true, enum: ["Chi", "Eng"] },
    tuition_location: { type: String, required: true },
    detailed_address: { type: String },
    time_available: { type: String, required: true },
    num_of_student: { type: Number, required: true },
    //length in hours 每堂時長
    length: {
        type: Number,
        required: true,
        get: function (v) { return Math.round(v); },
        set: function (v) { return Math.round(v); },
    },
    lessons_per_week: { type: Number, required: true },
    min_salary: { type: Number, required: true },
    max_salary: { type: Number, required: true },
    agreed_salary: { type: Number },
    school: { type: String, required: true },
    preference: { type: String },
    client: { type: mongoose_2.Schema.Types.ObjectId, required: true, ref: "Client" },
    matched_tutor: { type: mongoose_2.Schema.Types.ObjectId, ref: "Tutor" },
});
CaseSchema.virtual("charge").get(function () {
    var total_amount = 0;
    if (this.agreed_salary)
        total_amount = this.agreed_salary * this.length * this.lessons_per_week;
    return total_amount;
});
CaseSchema.virtual("url").get(function () {
    return "/case/".concat(this._id);
});
var CaseModel = mongoose_1.default.model("Case", CaseSchema);
exports.CaseModel = CaseModel;
