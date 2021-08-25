import i18n from "i18next";

// This module will load the translations.
import Backend from "i18next-http-backend";

// This module will detect the language for us.
import LanguageDetector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";

// Check users default browser language...

var lng = window.navigator.userLanguage || navigator.language.length > 2 ? navigator.language.substring(0, 2).toLowerCase() : navigator.language;

//console.log('language is..222', window.navigator.userLanguage || navigator.language);
//console.log('language is..', lng);

// If language is not any of these languages default to english
switch(lng) {
  case 'us':
    lng = 'us';
  break;
  case 'en':
    lng = 'en';
  break;
  case 'es':
    lng = 'es';
    break;
    case 'kr':
      lng = 'kr';
      break;
      case 'ko':
      lng = 'kr';
      break;
      case 'tw':
        lng = 'tw';
        break;
        case 'fi':
        lng = 'ph';
        break;
        case 'zh':
        let newLanguage = window.navigator.userLanguage || navigator.language;
        lng = newLanguage.substring(3,5).toLowerCase();
          break;
        case 'cn':
        lng = 'cn';
        break;
        case 'ae':
        lng = 'ae';
        break;
        case 'ar':
          lng = 'ae';
            break;
        case 'ph':
        lng = 'ph';
        break;
        case 'vi':
        lng = 'vi';
        break;
        default:
          lng = 'us'
}

// console.log('language is..', lng)

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: lng,
    // debug: true,

    detection: {
      order: ["queryString", "cookie"],
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
