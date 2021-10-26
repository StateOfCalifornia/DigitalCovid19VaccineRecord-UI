import React from 'react';
import ReactGA from 'react-ga';
import { Trans } from "react-i18next";
import faqLinkLanguage from "../utils/faqLinkLanguage";
import AppController from '../utils/AppController';



const Footer = () => {
    const date = new Date();
    return (
        <footer style={{ padding: '20px 0', backgroundColor: '#F9F9F9' }}>
            <div className='footerContainer' style={{ position: 'relative' }}>
                <ul style={{ paddingLeft: '0' }} className="footerLinks">
                    <li><img src="/imgs/dohlogoblack.png" width='120px' alt="doh.wa.gov Footer Logo" /></li>
                    <li>
                        <ReactGA.OutboundLink
                            eventLabel="ca_gov"
                            to={'https://www.doh.wa.gov/'}
                            target="_blank"
                        >
                            <Trans i18nKey="footer.home">doh.wa.gov home</Trans>
                        </ReactGA.OutboundLink>
                        {AppController.externalLink()}
                    </li>
                    <li>
                        <ReactGA.OutboundLink
                            eventLabel="wa_gov_use"
                            to={'https://www.doh.wa.gov'}
                            target="_blank"
                        >
                            <Trans i18nKey="footer.conditionsofuse">Conditions of Use</Trans>
                        </ReactGA.OutboundLink>
                        {AppController.externalLink()}
                    </li>
                    <li>
                        <ReactGA.OutboundLink
                            eventLabel="wa_gov_privacy"
                            to={'https://www.doh.wa.gov/PrivacyandCopyright'}
                            target="_blank"
                        >
                            <Trans i18nKey="footer.privacypolicy">Privacy Policy</Trans>
                        </ReactGA.OutboundLink>
                        {AppController.externalLink()}
                    </li>
                    <li>
                        <ReactGA.OutboundLink
                            eventLabel="ca_gov_accessibility"
                            to={'https://www.doh.wa.gov/AboutUs/AccessibilityPolicyAboutInformationandData'}
                            target="_blank"
                        >
                            <Trans i18nKey="footer.accessibility">Accessibility</Trans>
                        </ReactGA.OutboundLink>
                        {AppController.externalLink()}
                    </li>
                    <li><a href={faqLinkLanguage()}  rel="noopener noreferrer"><Trans i18nKey="footer.faq">FAQ</Trans></a></li>
                    <li><a href={faqLinkLanguage()}  rel="noopener noreferrer"><Trans i18nKey="ffooter.faq">Contact Us</Trans></a></li>
                </ul>
                <p style={{ paddingLeft: '0', paddingTop: '20px' }}>{<Trans i18nKey="footer.copyright">Copyright</Trans>} &copy; {date.getFullYear()} State of Washington</p>
            </div>
        </footer>
    )
}

export default Footer;