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
    case 'zh':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-ch ';
      break;
    case 'ar':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-ar';
      break;
    case 'ko':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-ko';
      break;
    case 'tl':
      hyperlink = 'https://myvaccinerecord.cdph.ca.gov/faq-tg';
      break;
    case 'zh-tw':
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