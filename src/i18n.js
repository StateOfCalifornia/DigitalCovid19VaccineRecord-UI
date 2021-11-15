import i18n from "i18next";

// This module will load the translations.
import Backend from "i18next-http-backend";

// This module will detect the language for us.
import LanguageDetector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";

// Check users default browser language...

var lng = window.navigator.userLanguage || navigator.language.length > 2 ? navigator.language.substring(0, 2).toLowerCase() : navigator.language;

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
    fallbackLng: 'en',
    // debug: true,

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
