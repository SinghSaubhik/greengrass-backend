import { Schema, model } from "mongoose";

const User = new Schema({
  name: String,
  email: String,
  password: String,
  avatarUrl: { type: String, default: "" },
  userType: { type: String, default: "standard" },
});

export default model("User", User);
