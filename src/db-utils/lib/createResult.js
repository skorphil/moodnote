import { dbConnect } from "./dbConnect";
import Result from "../models/result.model";

export async function createResult(resultData) {
  const user = await new Result(resultData);
  try {
    await dbConnect();
    await user.save();
    console.debug("Result saved to db");
  } catch (error) {
    throw error;
  }
}
