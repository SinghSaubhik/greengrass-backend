import { Schema, model, Types } from "mongoose";

const Test = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    totalQuestions: Number,
    questions: {
      type: [Object],
      default: [],
      required: true,
    },
    author: Types.ObjectId,
  },
  { timestamps: true }
);

export default model("Test", Test);
