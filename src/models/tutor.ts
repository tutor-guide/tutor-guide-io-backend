import mongoose, { Schema } from "mongoose";



const resultSchema = new mongoose.Schema({
  subject: { type: Schema.Types.ObjectId, required: true, ref: "Subject" },
  dseResult: { type: Number, required: true, min: 0, Max: 7 },
});

const TutorSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  available: { type: Boolean, required: true, default: true },
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  tutorID: { type: Number, required: true },
  subjects: [resultSchema],
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
  media_channel: {
    type: String,
    required: true,
    enum: ["FB", "IG", "Goop", "Frd/Fam", "Google"],
  },
});

TutorSchema.virtual("url").get(function () {
  return `/tutor/${this._id}`;
});

const TutorModel = mongoose.model("Tutor", TutorSchema);

export { TutorModel };
