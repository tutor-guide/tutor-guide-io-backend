import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  english_name: { type: String, required: true },
  chinese_name: { type: String, required: true },
});

const SubjectModel = mongoose.model("Subject", SubjectSchema);

export { SubjectModel };
