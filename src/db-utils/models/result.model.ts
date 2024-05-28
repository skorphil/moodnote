import mongoose from "mongoose";
import { moodDimensionSchema } from "./moodDimension.model";
const { Schema, model, models } = mongoose;

const resultSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  moodDimensions: {
    type: [moodDimensionSchema],
    required: true,
  },
} as const);

export default models.Result || model("Result", resultSchema);
