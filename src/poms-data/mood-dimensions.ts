export { moodDimensionsScoring, MoodDimension, Emotion };

type MoodDimension = keyof typeof moodDimensionsScoring;

type Emotion =
  | TenEmotions
  | AngEmotions
  | FatEmotions
  | DepEmotions
  | EraEmotions
  | VigEmotions
  | ConEmotions;

type TenEmotions = keyof typeof TEN;
type AngEmotions = keyof typeof ANG;
type FatEmotions = keyof typeof FAT;
type DepEmotions = keyof typeof DEP;
type EraEmotions = keyof typeof ERA;
type VigEmotions = keyof typeof VIG;
type ConEmotions = keyof typeof CON;

const TEN = {
  tense: "default",
  onEdge: "default",
  uneasy: "default",
  restless: "default",
  nervous: "default",
  anxious: "default",
} as const;

const ANG = {
  angry: "default",
  grouchy: "default",
  annoyed: "default",
  resentful: "default",
  bitter: "default",
  furious: "default",
} as const;

const FAT = {
  wornOut: "default",
  fatigued: "default",
  exhausted: "default",
  weary: "default",
  bushed: "default",
} as const;

const DEP = {
  unhappy: "default",
  sad: "default",
  hopeless: "default",
  discouraged: "default",
  miserable: "default",
  helpless: "default",
  worthless: "default",
} as const;

const ERA = {
  proud: "default",
  ashamed: "reversed",
  competent: "default",
  confident: "default",
  satisfied: "default",
  embarrassed: "reversed",
} as const;

const VIG = {
  lively: "default",
  active: "default",
  energetic: "default",
  fullOfPep: "default",
  vigorous: "default",
} as const;

const CON = {
  confused: "default",
  cantConcentrate: "default",
  bewildered: "default",
  forgetful: "default",
  uncertainAboutThings: "default",
} as const;

const moodDimensionsScoring = {
  TEN,
  ANG,
  FAT,
  DEP,
  ERA,
  VIG,
  CON,
} as const;
