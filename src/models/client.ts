import  mongoose, { Schema } from "mongoose";


interface IClient {
  gender: string;
  first_name: string;
  last_name?: string;
  contact_number: string;
  cases?: Array<Schema.Types.ObjectId>;
}

const ClientSchema = new Schema<IClient>({
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

const ClientModel = mongoose.model<IClient>("Client", ClientSchema);

export {ClientModel}