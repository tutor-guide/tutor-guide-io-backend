import mongoose from "mongoose";
const Schema = mongoose.Schema;
const subjectSchema = new mongoose.Schema({
    name: { type: String,
        required: true,
        enum: [
            "AllSub",
            "Chi",
            "Eng",
            "Math",
            "LS",
            "M1",
            "M2",
            "ChiLit",
            "EngLit",
            "ChiHis",
            "Econ",
            "Relig",
            "Geo",
            "His",
            "Tour",
            "Bio",
            "Chem",
            "Phy",
            "IntSci",
            "ComSci",
            "Bafs",
            "DesApp",
            "Health",
            "Ict",
            "Tech",
            "Mus",
            "Va",
            "Sports",
        ] },
    dseResult: { type: Number, required: true, min: 0, Max: 7 }
});
const TutorSchema = new Schema({
    status: { type: String, required: true, enum: ["available", "unavailable"] },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    first_name: { type: String },
    last_name: { type: String, required: true },
    subject: [subjectSchema],
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
    cases: [{ type: Schema.Types.ObjectId, ref: "Case" }],
    //private field
    contact_number: { type: String, required: true, selected: false },
    media_channel: { type: String, required: true, enum: ["FB", "IG", "Goop", "Frd/Fam", "Google"] }
});
TutorSchema.virtual("url").get(function () {
    return `/tutor/${this._id}`;
});
module.exports = mongoose.model("Tutor", TutorSchema);
