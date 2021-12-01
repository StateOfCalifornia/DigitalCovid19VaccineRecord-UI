import i18n from '../i18n';

/*
Accomodate the following languages
    'am': 'Amharic - የቋንቋዎ ስም',
    'ar': 'Arabic - العربية',
    'zh-tw': 'Chinese (Traditional) - 繁體字',
    'chk': 'Chuukese - Fosun Chuuk',
    'prs': 'Dari - دری',
    'fa': 'Farsi - نام زبان شما',
    'fr': 'French - Français',
    'fj': 'Fijian - Vosa vaka-Viti',
    'de': 'German - Deutsch',
    'hi': 'Hindi - हिन्दी',
    'ja': 'Japanese - 日本語',
    'ko': 'Korean - 한국어',
    'mam': 'Mam - Qyool',
    'mh': 'Marshallese - Kajin Ṃajōḷ',
    'mxb': 'Mixteco Bajo - Mixteco bajo Tu\'un savi',
    'ne': 'Nepali - नेपाली',
    'om': 'Oromo - Maqaa Afaan Keessanii',
    'ps': 'Pashto - پښتو',
    'pt': 'Portuguese - Português',
    'pa': 'Punjabi - ਪੰਜਾਬੀ',
    'ro': 'Romanian - Română',
    'ru': 'Russian - Русский',
    'sm': 'Samoan - Igoa o le Gagana',
    'so': 'Somali - Soomaali',
    'sw': 'Swahili - Kiswahili',
    'tl': 'Tagalog - Wikang Tagalog',
    'te': 'Telugu - మీ భాష పేరు',
    'ti': 'Tigrinya - ስም ቋንቋኹም',
    'to': 'Tongan - lea faka-Tonga',
    'tr': 'Turkish - Türkçe',
    'uk': 'Ukrainian - Український',
    'ur': 'Urdu - آپ کی زبان کا نام',
    'vi': 'Vietnamese - Tiếng Việt'


*/

const faqLinkLanguage = () => {
  var userLanguage = i18n.resolvedLanguage;
  var WhereBegin = userLanguage.indexOf("-");
  if (WhereBegin > 1){
    userLanguage = userLanguage.substring(0, WhereBegin)
  }

  return '/faq -' + userLanguage;

  //this may no longer be needed, below.
  switch (left(i18n.resolvedLanguage, 2)) {
    case 'en':
      return '/faq';
    case 'es':
      return '/faq-es';
    case 'zh':
      return '/faq-ch ';
    case 'ar':
      return '/faq-ar';
    case 'ko':
      return '/faq-ko';
    case 'tl':
      return '/faq-tg';
    case 'zh-tw':
      return '/faq-ch-hant';
    case 'vi':
      return '/faq-vi';
    default:
      return '/faq';
  }
}

export default faqLinkLanguage;