export const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "hi", label: "Hindi" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "zh", label: "Chinese (Simplified)" },
  { value: "ar", label: "Arabic" },
  { value: "ru", label: "Russian" },
];

export function getLanguageLabel(value) {
  const language = languages.find((lang) => lang.value === value);
  return language ? language.label : value;
}
