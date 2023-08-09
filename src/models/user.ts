import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, max_length: 30 },
  email: { type: String, required: true},
  password: { type: String, required: true, min_length: 8 },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };
