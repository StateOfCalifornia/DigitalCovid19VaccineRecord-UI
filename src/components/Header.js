/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LanguageIcon from '@material-ui/icons/Language';
import withAITracking  from '../AppInsights';
import { appInsights } from '../AppInsights';
import { SeverityLevel } from '@microsoft/applicationinsights-web';


const Header = () => {

  const { t, i18n } = useTranslation();

  // Language
  const changeLanguage = (language) => {
    //be sure the language code STOPs at the hyphen
    //var WhereBegin = language.indexOf("-");
    //if (WhereBegin > 1) {
     // language = language.substring(0, WhereBegin)
    //}

    i18n.changeLanguage(language);
    setLanguage(language);
  };

  const [expand, setExpand] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = useState(window.navigator.userLanguage || navigator.language.length > 3 ? navigator.language.substring(0, 3).toLowerCase() : navigator.language);
  appInsights.trackTrace({message: 'Requested Language Code: ' + i18n.language, severityLevel: SeverityLevel.Information});

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setExpand(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setExpand(false);
  };

  const handleKeyboardLanguage = (e, lang) => {
    const code = e.keyCode || e.charCode;
    if (code === 13 || code === 32) {
      if (code === 32) {
        e.preventDefault();
      }
      changeLanguage(lang);
    }
  }

  const menuLanguages = {
    'am': 'Amharic - አማርኛ',
    'ar': 'Arabic - العَرَبِيةُ',
    'my': "Burmese - မြန်မာ",
    'zh': 'Chinese (Simplified) - 简体中文',
    'zh-TW': 'Chinese (Traditional) - 繁體中文',
    'chk': 'Chuukese - Fosun Chuuk',
    'prs': 'Dari - دری',
    'en' : 'English',
    'fa': 'Farsi - فارسی',
    'fr': 'French - Français',
    'fj': 'Fijian - Vosa vakaviti',
    'de': 'German - Deutsch',
    'hi': 'Hindi - हिन्दी',
    'hmn': "Hmong - Hmoob",
    'ja': 'Japanese - 日本語',
    'kar': "Karen - ကညီၤ",
    'km': "Khmer - ភាសាខ្មែរ",
    'ko': 'Korean - 한국어',
    'lo': 'Lao - ພາ​ສາ​ລາວ',
    'mam': 'Mam - Qyol Mam',
    'mh': 'Marshallese - Kajin Ṃajeḷ',
    'mxb': 'Mixteco Bajo - Ñuu savi',
    'ne': 'Nepali - नेपाली',
    'om': 'Oromo - Oromiffa',
    'ps': 'Pashto - پښتو',
    'pt': 'Portuguese - Português (Brasil)',
    'pa': 'Punjabi - ਪੰਜਾਬੀ',
    'ro': 'Romanian - Română',
    'ru': 'Russian - Русский',
    'sm': 'Samoan - Faa-Samoa',
    'so': 'Somali - Af Soomaali',
    'es': 'Spanish - Español',
    'sw': 'Swahili - Kiswahili',
    'ta': 'Tamil - தமிழ்',
    'tl': 'Tagalog - Tagalog',
    'te': 'Telugu - తెలుగు',
    "th": 'Thai - ภาษาไทย',
    'ti': 'Tigrinya - ትግርኛ',
    'to': 'Tongan - Lea fakaTonga',
    'tr': 'Turkish - Türkçe',
    'uk': 'Ukrainian - Український',
    'ur': 'Urdu - اُردُو',
    'vi': 'Vietnamese - Tiếng Việt'
  }

  
  const searchByLanguage = () => {
    //const toSearch = language;
    let required = undefined;
    Object.entries(menuLanguages).forEach((key) => {
      if(i18n.resolvedLanguage != null){
       if(key.toString().substring(0,key.toString().indexOf(',')) === i18n.resolvedLanguage.toString().replace(/-$/,'')){
        required = key.toString().substring(key.toString().indexOf(',')+1);
       }
      }
    });
    return required;
  };

  return (
    <nav>
      <div className="headerContainer" style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ccc' }}>
        <div className="fluid-container">
          <div className="subheaderContainer">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', height: 70 }}>
              <div style={{ display: 'flex', alignItems: 'center' }} aria-label="State of Washington">
                <div style={{ textAlign: 'middle' }}>
                  <img className={i18n.dir(i18n.language) == "rtl"?"doh_logo_doh-black_rtl":"doh_logo_doh-black"} alt={"Wa State Seal"} width="120px" src="/imgs/doh_logo_doh-black.png" />
                </div>
                <div style={{ verticalAlign: "middle", textAlign: 'middle' }}>
                <Trans i18nKey="header.dohlogotext">Washington State<br /> Department of Health</Trans>
                </div>
              </div>
              {/* Temporarily disabled until we have all the Translations */}
              <div className="translationContainer" aria-label="languages" style={{ display: 'flex', alignItems: 'center' }}>
                {/* <ul className={i18n.dir() == 'rtl'?'translationList translationListRtl':'translationList'}>
                  <li tabIndex={0} onKeyPress={(e) => handleKeyboardLanguage(e, 'en')} onClick={() => changeLanguage('en')}>English</li>
                  <li tabIndex={0} onKeyPress={(e) => handleKeyboardLanguage(e, 'es')} onClick={() => changeLanguage('es')}>Español</li>
                  <li tabIndex={0} onKeyPress={(e) => handleKeyboardLanguage(e, 'zh')} onClick={() => changeLanguage('zh')}>简体中文</li>
                </ul> */}
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ fontWeight: '400', padding: '2px 0px 0px 0px', textTransform: 'none' }}>
                  <LanguageIcon /> {expand === false ? <ExpandMoreIcon /> : <ExpandLessIcon /> } { searchByLanguage() }
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {Object.entries(menuLanguages).map(([key, value]) => {
                    return <MenuItem id={key} onClick={() => { handleClose(value); changeLanguage(key) }} style={{ textDecoration: 'underline' }}>{value}</MenuItem>
                  })
                  }
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-nav-container" style={{ borderBottom: '1px solid #ccc' }}>
        <div className="fluid-container">
          <div className='vaccineLogo' style={{ padding: '5px 1.5vw' }}>
            <Link to='/' style={{ display: 'inline-block', height: 'inherit', margin: '0', width: 'inherit' }}>
              <Trans><img style={{ alignSelf: "center" }} alt={"WaVerify Logo"} width="200px" src={'/imgs/' + t('header.waverifylogo')} /></Trans>
              <span className='logoDescription' style={{ fontSize: '18px', display: 'inline-block', paddingLeft: '17px', color: '#22489c' }}><Trans i18nKey="dashboardpage.contentheader">Digital COVID-19 Vaccine Record</Trans></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );

};

export default withAITracking(Header);
