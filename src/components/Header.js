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
    setLanguage(language)
  };

  const [expand, setExpand] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = useState(window.navigator.userLanguage || navigator.language.length > 3 ? navigator.language.substring(0, 3).toLowerCase() : navigator.language);

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
    'am': 'Amharic - የቋንቋዎ ስም',
    'ar': 'Arabic - العربية',
    'my': "Burmese - ဘာသာစကား အမည်",
    'zh-tw': 'Chinese (Traditional) - 繁體中文',
    'chk': 'Chuukese - Fosun Chuuk',
    'prs': 'Dari - دری',
    'fa': 'Farsi - نام زبان شما',
    'fr': 'French - Français',
    'fj': 'Fijian - Vosa vakaViti',
    'de': 'German - Deutsch',
    'hi': 'Hindi - हिन्दी',
    'hmn': "Hmong - Npe Hom Lus",
    'kar': "Karen - ကျိာ်အမံၤ",
    'km': "Khmer - ភាសាខ្មែរ",
    'ja': 'Japanese - 日本語',
    'ko': 'Korean - 한국어',
    'lo': 'Lao - ລາວ',
    'mam': 'Mam - Qyol Mam',
    'mh': 'Marshallese - Kajin Ṃajeḷ',
    'mxb': 'Mixteco Bajo - Mixteco bajo Tu`un savi',
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
    'ta': 'Tamil - தமிழ்',
    'tl': 'Tagalog - Tagalog', 
    'te': 'Telugu - మీ భాష పేరు',
    "th": 'Thai - ไทย',
    'ti': 'Tigrinya - ስም ቋንቋኹም',
    'to': 'Tongan - Lea fakaTonga',
    'tr': 'Turkish - Türkçe',
    'uk': 'Ukrainian - Український',
    'ur': 'Urdu - آپ کی زبان کا نام',
    'vi': 'Vietnamese - Tiếng Việt'
  }

  return (
    <nav>
      <div className="headerContainer" style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ccc' }}>
        <div className="fluid-container">
          <div className="subheaderContainer">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', height: 70 }}>
              <div style={{ display: 'flex', alignItems: 'center' }} aria-label="State of Washington">
                <div style={{ textAlign: 'middle' }}>
                  <img style={{ alignSelf: "left", paddingRight: 15 }} alt={"Wa State Seal"} width="120px" src="/imgs/doh_logo_doh-black.png" />
                </div>
                <div style={{ verticalAlign: "middle", textAlign: 'middle' }}>
                <Trans i18nKey="header.dohlogotext">Washington State<br /> Department of Health</Trans>
                </div>
              </div>
              {/* Temporarily disabled until we have all the Translations */}
              <div className="translationContainer" aria-label="languages" style={{ display: 'flex', alignItems: 'center' }}>
                <ul className='translationList'>
                  <li tabIndex={0} onKeyPress={(e) => handleKeyboardLanguage(e, 'en')} onClick={() => changeLanguage('en')}>English</li>
                  <li tabIndex={0} onKeyPress={(e) => handleKeyboardLanguage(e, 'es')} onClick={() => changeLanguage('es')}>Español</li>
                  <li tabIndex={0} onKeyPress={(e) => handleKeyboardLanguage(e, 'zh')} onClick={() => changeLanguage('zh')}>简体字</li>
                </ul>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ fontWeight: '400', padding: '2px 0px 0px 0px', textTransform: 'none' }}>
                  More <LanguageIcon /> {expand === false ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {Object.entries(menuLanguages).map(([key, value]) => {
                    return <MenuItem id={key} onClick={() => { handleClose(); changeLanguage(key) }} style={{ textDecoration: 'underline' }}>{value}</MenuItem>
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

export default Header;
