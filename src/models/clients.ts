import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  first_name: { type: String },
  last_name: { type: String, required: true },
  contact_number: { type: String, required: true, selected: false },
  cases: [{ type: Schema.Types.ObjectId, ref: "Case" }],
});

ClientSchema.virtual("full_name").get(function() {
    let full_name =""
    full_name = this.first_name + this.last_name
    return full_name
})

ClientSchema.virtual("url").get(function () {
    return `/client/${this._id}`;
  });

module.exports = mongoose.model("Client", ClientSchema);
  