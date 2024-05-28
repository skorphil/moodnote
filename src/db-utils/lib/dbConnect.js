import { connect } from "mongoose";
// import "dotenv/config";
// console.log("==PROCESS==", process.env.MONGO_URI);

export async function dbConnect() {
  try {
    await connect(import.meta.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    throw error;
  }
}
