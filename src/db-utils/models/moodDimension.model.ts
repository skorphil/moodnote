import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

export const moodDimensionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  } as const,
  { _id: false }
);

// export default models.MoodDimension ||
//   model("MoodDimension", moodDimensionSchema);
