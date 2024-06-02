import type { PomsTranslations } from "../../../types";

import dimensions from "./dimensions";
import emotions from "./emotions";
import question from "./question";
import scale from "./scale";

const pomsTranslations: PomsTranslations = {
  ...dimensions,
  ...emotions,
  ...scale,
  ...question,
};

export default pomsTranslations;
