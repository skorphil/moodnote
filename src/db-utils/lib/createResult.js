import { dbConnect } from "./dbConnect";
import Result from "../models/result.model";

export async function createResult(resultData) {
  console, log("Result:", Result);
  const user = await new Result(resultData);
  try {
    await dbConnect();
    await user.save();
    console.log("Result saved to db");
  } catch (error) {
    throw error;
  }
}
