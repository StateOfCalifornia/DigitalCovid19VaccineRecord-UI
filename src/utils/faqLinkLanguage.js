const faqLinkLanguage = () => {

  let browserLanguage = localStorage.getItem('i18nextLng');

  let hyperlink;
  switch (browserLanguage) {
    case 'en':
      hyperlink = '/faq';
      break;
    case 'es':
      hyperlink = '/faq-es';
      break;
    case 'zh':
      hyperlink = '/faq-ch ';
      break;
    case 'ar':
      hyperlink = '/faq-ar';
      break;
    case 'ko':
      hyperlink = '/faq-ko';
      break;
    case 'tl':
      hyperlink = '/faq-tg';
      break;
    case 'zh-tw':
      hyperlink = '/faq-ch-hant';
      break;
    case 'vi':
      hyperlink = '/faq-vi';
      break;
    default:
      // default is english
      hyperlink = '/faq';
  }

  return hyperlink;
}

export default faqLinkLanguage;