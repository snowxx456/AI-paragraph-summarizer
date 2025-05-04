"use client";
import { languages } from "@/libs/language";

export function LanguageSelector({ selectedLanguage, disable = false }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="text-sm font-medium">Translate to:</span>
      <select
        className="border border-gray-300 rounded-md p-2 text-sm bg-black"
        disabled={disable}
        onChange={(e) => {
          const selectedValue = e.target.value;
          //console.log("Selected language:", selectedValue);
          selectedLanguage(selectedValue);
        }}
      >
        {languages.map((language) => (
          <option key={language.value} value={language.label}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
}
