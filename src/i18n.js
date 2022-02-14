import i18n from "i18next";
// This module will load the translations.
import Backend from "i18next-http-backend";
// This module will detect the language for us.
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const customFallbacks = {
    'zh-MO': ['zh-TW'],
    'zh-HK': ['zh-TW'],
}

/**
 * Defaults to 'en' using the `fallbackLng` option.
 *
 * Language variants containing a region (e.g. zh-cn) will fallback to the broader version of the language (e.g. zh)
 * See: https://www.i18next.com/principles/fallback#variant-resolving-fallback-from-dialects-or-scripts
 */
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      // Need to use fallback function approach
      // See: https://github.com/i18next/i18next/issues/1506
      // See: https://www.i18next.com/principles/fallback#fallback-to-different-languages
      load: "currentOnly",
      fallbackLng: (code) => {
          // Set English as default
          if (!code || code === 'en') return ['en'];

          const fallbacks = [code];

          // Process custom fallbacks
          if (customFallbacks[code]) {
              fallbacks.push(customFallbacks[code])
              return fallbacks;
          }

          // add pure lang
          const langPart = code.split('-')[0];
          if (langPart !== code) fallbacks.push(langPart);

          // developer lang
          fallbacks.push('en')
          return fallbacks;
    },
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'ul','li'],
    detection: {
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    react:{
      useSuspense:false
    }
  });

export default i18n;
