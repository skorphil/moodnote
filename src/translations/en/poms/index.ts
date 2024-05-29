import type { PomsTranslations } from "../../../types";

import dimensions from "./dimensions.en";
import emotions from "./emotions.en";
import question from "./question.en";
import scale from "./scale.en";

const pomsTranslations: PomsTranslations = {
  ...dimensions,
  ...emotions,
  ...scale,
  ...question,
};

export default pomsTranslations;
