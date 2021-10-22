/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const Header = () => {
  const { i18n } = useTranslation();

  // Language
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language)
  };

  const [expand, setExpand] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = useState(window.navigator.userLanguage || navigator.language.length > 2 ? navigator.language.substring(0, 2).toLowerCase() : navigator.language);

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

  return (
    <nav>
      <a className="skip-to-content-link" href="#main">
        Skip to main content
      </a>
      <div className="headerContainer" style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ccc' }}>
        <div className="fluid-container">
          <div className="subheaderContainer">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }} aria-label="State of Washington">
                <img src="/imgs/waverifylogo.png" alt="Gov Logo" height="20px" width='50px' style={{ paddingRight: '20px' }} />
                <span style={{ verticalAlign: 'middle' }}>State of Washington</span>
              </div>
              <div className="translationContainer" aria-label="languages" style={{ display: 'flex', alignItems: 'center' }}>
                <ul className='translationList'>
                  <li tabIndex={0} onKeyPress={(e) => handleKeyboardLanguage(e, 'en')} onClick={() => changeLanguage('en')}>English</li>
                  <li tabIndex={0} onKeyPress={(e) => handleKeyboardLanguage(e, 'es')} onClick={() => changeLanguage('es')}>Español</li>
                  <li tabIndex={0} onKeyPress={(e) => handleKeyboardLanguage(e, 'cn')} onClick={() => changeLanguage('cn')}>简体字</li>
                </ul>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ fontWeight: '400', padding: '2px 0px 0px 0px' }}>
                  More {expand === false ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => { handleClose(); changeLanguage('ph') }} style={{ textDecoration: 'underline' }}>Tagalog</MenuItem>
                  <MenuItem onClick={() => { handleClose(); changeLanguage('vi') }} style={{ textDecoration: 'underline' }}>Tiếng Việt (Vietnamese)</MenuItem>
                  <MenuItem onClick={() => { handleClose(); changeLanguage('kr') }} style={{ textDecoration: 'underline' }}>한국어 (Korean)</MenuItem>
                  <MenuItem onClick={() => { handleClose(); changeLanguage('tw') }} style={{ textDecoration: 'underline' }}>繁體字 (Traditional)</MenuItem>
                  <MenuItem onClick={() => { handleClose(); changeLanguage('ae') }} style={{ textDecoration: 'underline' }}>العربية (Arabic)</MenuItem>
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
              <img
                style={{ alignSelf: "center" }}
                alt={"CDT Logo"}
                width="58px"
                height='62px'
                src="/imgs/govlogov2.png"
              />
              <span className='logoDescription' style={{ fontSize: '18px', display: 'inline-block', paddingLeft: '17px', color: '#22489c' }}>Digital COVID-19 <br /> Vaccine Record</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
