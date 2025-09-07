import type { APIContext } from "astro";
import { defaultLanguage } from "../../translations";
import { calculateResultScores } from "../../lib/calculate-result-scores";
import { getLangFromUrl } from "../../lib/translate";
import type { ResultScores } from "../../types";

type Result = {
  [x: number]: ResultScores;
};

export async function POST(context: APIContext) {
  const language = getLangFromUrl(
    new URL(context.request.headers.get("referer") || defaultLanguage)
  );
  const currentDate = Date.now();
  const formData = await context.request.formData();
  const result = {
    [currentDate]: calculateResultScores(formData),
  };

  return context.redirect(
    `/${language}/result?result=` + JSON.stringify(result)
  );
}
