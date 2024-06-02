import type { MoodDimension } from "../poms-data/mood-dimensions";
import { moodDimensionsScoring } from "../poms-data/mood-dimensions";

type DimensionsScores = Record<MoodDimension, number>;
type TmdScore = { TMD: number };
type ResultScores = DimensionsScores & TmdScore;

export function calculateResult(formData: FormData): ResultScores {
  const dimensions = Object.entries(moodDimensionsScoring);

  let dimensionsScores = {} as DimensionsScores;
  dimensions.forEach(([dimensionKey]) => {
    const dimensionScore = calculateDimensionScore(
      dimensionKey as MoodDimension,
      formData
    );
    dimensionsScores = { ...dimensionsScores, ...dimensionScore };
  });

  const tmdScore: TmdScore = calculateTmdScore(dimensionsScores);

  return {
    ...dimensionsScores,
    ...tmdScore,
  };
}

function calculateTmdScore(dimensionsScores: DimensionsScores): TmdScore {
  let tmdScore: TmdScore = { TMD: 100 };
  Object.entries(dimensionsScores).forEach(([dimension, score]) => {
    ["VIG", "ERA"].includes(dimension)
      ? (tmdScore.TMD -= score)
      : (tmdScore.TMD += score);
  });
  return tmdScore;
}

function calculateDimensionScore(
  dimensionKey: MoodDimension,
  formData: FormData
) {
  let dimensionScore = { [dimensionKey]: 0 };

  Object.entries(moodDimensionsScoring[dimensionKey]).forEach(
    ([emotion, scoring]) => {
      const emotionScore = Number(formData.get(emotion));

      dimensionScore[dimensionKey] +=
        scoring === "reversed" ? Math.abs(emotionScore - 4) : emotionScore;
    }
  );
  return dimensionScore;
}
