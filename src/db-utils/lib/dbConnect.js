import { connect } from "mongoose";

// import "dotenv/config";
// console.log("==PROCESS==", process.env.MONGO_URI);

let cached = globalThis.mongoose;
if (!cached) {
  cached = globalThis.mongoose = { conn: null };
}

export async function dbConnect() {
  if (cached.conn) return cached.conn;
  try {
    cached.conn = await connect(import.meta.env.MONGO_URI);
    console.log("Database connected");
    return cached.conn;
  } catch (error) {
    throw error;
  }
}
