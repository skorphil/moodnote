import mongoose from "mongoose";
import type { Model } from "mongoose";
const { Schema, model, models } = mongoose;

/**
 * Represent feeling, which user has to evaluate.
 */
const moodStateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  scaleLength: {
    type: Number,
    required: true,
  },
  dimension: {
    type: String,
    required: true,
  },
  reverseScored: {
    type: Boolean,
    required: true,
  },
} as const);

export default (models.Record as Model<any, {}>) ||
  (model("Session", moodStateSchema) as Model<any, {}>);
