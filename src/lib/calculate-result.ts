import type {
  MoodDimension,
  MoodDimensionsNames,
  EmotionScoring,
  MoodDimensions,
} from "../types";
import { moodDimensions } from "../poms-data/mood-dimensions";

class Dimension {
  emotionsScores: number[];
  name: string = "Translated name of ";
  constructor(
    formData: FormData,
    moodDimension: MoodDimension,
    dimensionName: MoodDimensionsNames
  ) {
    // this.name = translation
    this.emotionsScores = Object.entries(moodDimension.emotionScoring).map(
      (emotion) => {
        const emotionScore = Number(formData.get(emotion[0]));
        const dimensionScore =
          emotion[1] === "reversed" ? Math.abs(emotionScore - 4) : emotionScore;
        return dimensionScore;
      }
    );
  }
  getScore() {
    return this.emotionsScores.reduce((acc, curr) => acc + curr, 0);
  }
}

export default function calculateResult(FormData: FormData) {
  let result = [];
  for (let dimensionName in moodDimensions) {
    const dimension = new Dimension(
      FormData,
      moodDimensions[dimensionName],
      dimensionName
    );
    // @ts-ignore
    result.push({
      dimension: dimensionName,
      name: dimension.name,
      score: dimension.getScore(),
    });
  }
  let tmdScore = 0;
  for (let dimensionEntry of result) {
    // @ts-ignore
    if (["VIG", "ERA"].includes(dimensionEntry.dimension)) {
      // @ts-ignore
      tmdScore -= dimensionEntry.score;
    } else {
      // @ts-ignore
      tmdScore += dimensionEntry.score;
    }
  }
  // @ts-ignore
  result.push({
    dimension: "TMD",
    name: "TMD.NAME",
    score: tmdScore,
  });

  return result;
}
