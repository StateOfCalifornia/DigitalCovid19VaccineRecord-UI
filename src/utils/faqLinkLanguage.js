const faqLinkLanguage = () => {

  let browserLanguage = localStorage.getItem('i18nextLng');

  let hyperlink;
  switch (browserLanguage) {
    case 'en' || 'us':
      hyperlink = 'https://waverify.com/faq';
      break;
    case 'es':
      hyperlink = 'https://waverify.com/faq-es';
      break;
    case 'cn':
      hyperlink = 'https://waverify.com/faq-ch ';
      break;
    case 'ae':
      hyperlink = 'https://waverify.com/faq-ar';
      break;
    case 'kr':
      hyperlink = 'https://waverify.com/faq-ko';
      break;
    case 'ph':
      hyperlink = 'https://waverify.com/faq-tg';
      break;
    case 'tw':
      hyperlink = 'https://waverify.com/faq-ch-hant';
      break;
    case 'vi':
      hyperlink = 'https://waverify.com/faq-vi';
      break;
    default:
      // default is english
      hyperlink = 'https://waverify.com/faq';
  }

  return hyperlink;
}

export default faqLinkLanguage;