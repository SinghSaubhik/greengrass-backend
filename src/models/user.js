import { Schema, model } from "mongoose";

const User = new Schema({
  name: String,
  role: String,
  department: String,
});

export default model("User", User);
