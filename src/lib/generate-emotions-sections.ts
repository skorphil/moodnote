import { moodDimensionsScoring } from "../poms-data/mood-dimensions";
import type { EmotionsSections, Emotion } from "../types";

export function generateEmotionSections(
  sectionsNumber: number
): EmotionsSections {
  const emotions = Object.values(moodDimensionsScoring).flatMap(Object.keys);
  const shuffledEmotions = shuffle(emotions);

  const sections = {} as EmotionsSections;
  for (let i = 0; i < sectionsNumber; i++) {
    const start = i * Math.floor(shuffledEmotions.length / sectionsNumber);
    const end = (i + 1) * Math.floor(shuffledEmotions.length / sectionsNumber);
    sections[`${i + 1} group`] = shuffledEmotions.slice(
      start,
      end
    ) as Emotion[];
  }
  return sections;
}

const shuffle = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};
