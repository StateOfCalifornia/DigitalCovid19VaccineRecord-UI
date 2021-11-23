import i18n from '../i18n';

const faqLinkLanguage = () => {
  switch (i18n.resolvedLanguage ? i18n.resolvedLanguage.toLowerCase() : undefined) {
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