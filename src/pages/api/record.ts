import type { APIContext } from "astro";
import { createResult } from "../../db-utils/lib/createResult";
import { moodStates } from "../../db/states";

export async function POST(context: APIContext): Promise<Response> {
  const formData = await context.request.formData();

  const result = {
    date: Date.now(),
    moodDimensions: [
      { name: "Tension", score: 0 },
      { name: "Anger", score: 0 },
      { name: "Fatigue", score: 0 },
      { name: "Depression", score: 0 },
      { name: "Esteem-related Affect", score: 0 },
      { name: "Vigour", score: 0 },
      { name: "Confusion", score: 0 },
      { name: "Total Mood Disturbance", score: 0 },
    ],
  };

  for (let state of moodStates) {
    const stateScore = Number(formData.get(state.name));
    if (stateScore === undefined) {
      throw new Error(`Cannot find ${state.name} in ${formData}`);
    }

    const dimensionScore = state.reverseScored
      ? Math.abs(stateScore - state.scaleLength + 1)
      : stateScore;
    const dimension = result.moodDimensions.find(
      (dimension) => dimension.name === state.dimension
    );
    if (!dimension) {
      throw new Error(`Cannot find ${state.dimension}`);
    }

    dimension.score += dimensionScore;
  }

  await createResult(result);

  // console.log(formData);
  // await createUser({
  //   _id: userId,
  //   username: username,
  //   password_hash: passwordHash,
  // });

  return context.redirect("/");
}
