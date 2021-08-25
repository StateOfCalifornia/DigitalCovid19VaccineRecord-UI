const faqLinkLanguage = () => {

  let browserLanguage = localStorage.getItem('i18nextLng');

  let hyperlink;
  switch (browserLanguage) {
    case 'en' || 'us':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq';
      break;
    case 'es':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-es';
      break;
    case 'cn':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-ch ';
      break;
    case 'ae':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-ar';
      break;
    case 'kr':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-ko';
      break;
    case 'ph':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-tg';
      break;
    case 'tw':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-ch-hant';
      break;
    case 'vi':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-vi';
      break;
    default:
      // default is english
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq';
  }

  return hyperlink;
}

export default faqLinkLanguage;