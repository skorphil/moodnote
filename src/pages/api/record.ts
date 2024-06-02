import type { APIContext } from "astro";
import { createResult } from "../../db-utils/lib/createResult";
import { moodStates } from "../../poms-data/states";
import { calculateResult } from "../../lib/calculate-result";
import { getLangFromUrl } from "../../lib/translate";

export async function POST(context: APIContext) {
  const lang = getLangFromUrl(
    new URL(context.request.headers.get("referer") || "")
  );
  const formData = await context.request.formData();

  return context.redirect(
    `/${lang}/result?result=` + JSON.stringify(calculateResult(formData))
  );
  // return new Response(JSON.stringify(calculateResult(formData)));
}
