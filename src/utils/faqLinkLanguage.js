const faqLinkLanguage = () => {

  let browserLanguage = localStorage.getItem('i18nextLng');

  let hyperlink;
  switch (browserLanguage) {
    case 'en' || 'us':
      hyperlink = '~/faq';
      break;
    case 'es':
      hyperlink = '~/faq-es';
      break;
    case 'cn':
      hyperlink = '~/faq-ch ';
      break;
    case 'ae':
      hyperlink = '~/faq-ar';
      break;
    case 'kr':
      hyperlink = '~/faq-ko';
      break;
    case 'ph':
      hyperlink = '~/faq-tg';
      break;
    case 'tw':
      hyperlink = '~/faq-ch-hant';
      break;
    case 'vi':
      hyperlink = '~/faq-vi';
      break;
    default:
      // default is english
      hyperlink = '~/faq';
  }

  return hyperlink;
}

export default faqLinkLanguage;