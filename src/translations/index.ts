import type { Translations } from "../types";
import en from "./en";
import ru from "./ru";

const languages = {
  en: "English",
  ru: "Русский",
};

const defaultLanguage = "en";

const translations: Translations = {
  en,
  ru,
} as const;

export { translations, defaultLanguage, languages };
