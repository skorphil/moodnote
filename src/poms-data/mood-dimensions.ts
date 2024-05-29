import type { MoodDimensions } from "../types";

export const moodDimensions: MoodDimensions = {
  TEN: {
    emotionScoring: {
      tense: "default",
      onEdge: "default",
      uneasy: "default",
      restless: "default",
      nervous: "default",
      anxious: "default",
    },
  },
  ANG: {
    emotionScoring: {
      angry: "default",
      grouchy: "default",
      annoyed: "default",
      resentful: "default",
      bitter: "default",
      furious: "default",
    },
  },
  FAT: {
    emotionScoring: {
      wornOut: "default",
      fatigued: "default",
      exhausted: "default",
      weary: "default",
      bushed: "default",
    },
  },
  DEP: {
    emotionScoring: {
      unhappy: "default",
      sad: "default",
      hopeless: "default",
      discouraged: "default",
      miserable: "default",
      helpless: "default",
      worthless: "default",
    },
  },
  ERA: {
    emotionScoring: {
      proud: "default",
      ashamed: "reversed",
      competent: "default",
      confident: "default",
      satisfied: "default",
      embarrassed: "reversed",
    },
  },
  VIG: {
    emotionScoring: {
      lively: "default",
      active: "default",
      energetic: "default",
      fullOfPep: "default",
      vigorous: "default",
    },
  },
  CON: {
    emotionScoring: {
      confused: "default",
      cantConcentrate: "default",
      bewildered: "default",
      forgetful: "default",
      uncertainAboutThings: "default",
    },
  },
};
