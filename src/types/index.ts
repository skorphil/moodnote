import type { MoodDimension, Emotion } from "../poms-data/mood-dimensions";

export {
  // Translations
  MoodDimensionsTranslationsWithTmd,
  EmotionsTranslations,
  ScaleTranslations,
  EmotionsSections,
  MoodDimension,
  Emotion,
};

type MoodDimensionsTranslations = Record<`dimension.${MoodDimension}`, string>;
type MoodDimensionsTranslationsWithTmd = MoodDimensionsTranslations & {
  "dimension.TMD": string;
};
type EmotionsTranslations = Record<`emotion.${Emotion}`, string>;

export type Translations = {
  readonly [key: string]: PomsTranslations;
};

export type QuestionTranslations = {
  readonly "question.poms": string;
};

export type PomsTranslations = QuestionTranslations &
  MoodDimensionsTranslationsWithTmd &
  ScaleTranslations &
  EmotionsTranslations;

type ScaleTranslations = {
  readonly "scale.0": string;
  readonly "scale.1": string;
  readonly "scale.2": string;
  readonly "scale.3": string;
  readonly "scale.4": string;
  readonly "scale.null": string;
};

type EmotionsSections = {
  [key: string]: Emotion[];
};

// type EmotionName = (typeof emotionNames)[number];
// type EmotionScoring = {
//   [key in EmotionName]?: "default" | "reversed";
// };
// type DimensionsTranslations = {
//   readonly [key in MoodDimensionsNamesTMD as `dimension.${key}`]: string;
// };
// export type MoodDimension = {
//   emotionScoring: EmotionScoring;
// };

// export type MoodDimensions = {
//   readonly [key in MoodDimensionName]: MoodDimension;
// };
