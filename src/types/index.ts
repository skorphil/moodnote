export {
  MoodDimensionsNames,
  EmotionsNames,
  DimensionsTranslations,
  EmotionsTranslations,
};

export type Translations = {
  readonly [key: string]: PomsTranslations;
};

export type EmotionScoring = {
  [key in EmotionsNames]?: "default" | "reversed";
};

export type MoodDimension = {
  emotionScoring: EmotionScoring;
};

export type MoodDimensions = {
  readonly [key in MoodDimensionsNames]: MoodDimension;
};

type DimensionsTranslations = {
  readonly [key in MoodDimensionsNamesTMD as `dimension.${key}`]: string;
};

export type QuestionTranslations = {
  readonly "question.poms": string;
};

export type PomsTranslations = QuestionTranslations &
  DimensionsTranslations &
  ScaleTranslations &
  EmotionsTranslations;

export type ScaleTranslations = {
  readonly "scale.0": string;
  readonly "scale.1": string;
  readonly "scale.2": string;
  readonly "scale.3": string;
  readonly "scale.4": string;
};

type EmotionsTranslations = Record<`emotion.${EmotionsNames}`, string>;

type EmotionsNames =
  | "tense"
  | "angry"
  | "wornOut"
  | "unhappy"
  | "proud"
  | "lively"
  | "confused"
  | "sad"
  | "active"
  | "onEdge"
  | "grouchy"
  | "ashamed"
  | "energetic"
  | "hopeless"
  | "uneasy"
  | "restless"
  | "cantConcentrate"
  | "fatigued"
  | "competent"
  | "annoyed"
  | "discouraged"
  | "resentful"
  | "nervous"
  | "miserable"
  | "confident"
  | "bitter"
  | "exhausted"
  | "anxious"
  | "helpless"
  | "weary"
  | "satisfied"
  | "bewildered"
  | "furious"
  | "fullOfPep"
  | "worthless"
  | "forgetful"
  | "vigorous"
  | "uncertainAboutThings"
  | "bushed"
  | "embarrassed";

const emotionNames = {
  tense: "tense",
  angry: "angry",
  wornOut: "wornOut",
  unhappy: "unhappy",
  proud: "proud",
  lively: "lively",
  confused: "confused",
  sad: "sad",
  active: "active",
  onEdge: "onEdge",
  grouchy: "grouchy",
  ashamed: "ashamed",
  energetic: "energetic",
  hopeless: "hopeless",
  uneasy: "uneasy",
  restless: "restless",
  cantConcentrate: "cantConcentrate",
  fatigued: "fatigued",
  competent: "competent",
  annoyed: "annoyed",
  discouraged: "discouraged",
  resentful: "resentful",
  nervous: "nervous",
  miserable: "miserable",
  confident: "confident",
  bitter: "bitter",
  exhausted: "exhausted",
  anxious: "anxious",
  helpless: "helpless",
  weary: "weary",
  satisfied: "satisfied",
  bewildered: "bewildered",
  furious: "furious",
  fullOfPep: "fullOfPep",
  worthless: "worthless",
  forgetful: "forgetful",
  vigorous: "vigorous",
  uncertainAboutThings: "uncertainAboutThings",
  bushed: "bushed",
  embarrassed: "embarrassed",
} as const;

type Emotion = (typeof emotionNames)[keyof typeof emotionNames];

type MoodDimensionsNames =
  | "TEN"
  | "ANG"
  | "FAT"
  | "DEP"
  | "ERA"
  | "VIG"
  | "CON";

type MoodDimensionsNamesTMD = MoodDimensionsNames & "TMD";
