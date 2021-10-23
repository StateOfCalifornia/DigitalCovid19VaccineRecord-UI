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
                    <li><img src="/imgs/waverifylogo.png" width='90px' alt="DOH.WA.gov Footer Logo" /></li>
                    <li>
                        <ReactGA.OutboundLink
                            eventLabel="ca_gov"
                            to={'https://www.doh.wa.gov/'}
                            target="_blank"
                        >
                            <Trans i18nKey="footer.home">DOH.WA.gov home</Trans>
                        </ReactGA.OutboundLink>
                        {AppController.externalLink()}
                    </li>
                    <li>
                        <ReactGA.OutboundLink
                            eventLabel="ca_gov_use"
                            to={'https://www.doh.wa.gov/use'}
                            target="_blank"
                        >
                            <Trans i18nKey="footer.conditionsofuse">Conditions of Use</Trans>
                        </ReactGA.OutboundLink>
                        {AppController.externalLink()}
                    </li>
                    <li>
                        <ReactGA.OutboundLink
                            eventLabel="ca_gov_privacy"
                            to={'https://www.doh.wa.gov/'}
                            target="_blank"
                        >
                            <Trans i18nKey="footer.privacypolicy">Privacy Policy</Trans>
                        </ReactGA.OutboundLink>
                        {AppController.externalLink()}
                    </li>
                    <li>
                        <ReactGA.OutboundLink
                            eventLabel="ca_gov_accessibility"
                            to={'https://www.doh.wa.gov'}
                            target="_blank"
                        >
                            <Trans i18nKey="footer.accessibility">Accessibility</Trans>
                        </ReactGA.OutboundLink>
                        {AppController.externalLink()}
                    </li>
                    <li><a href={faqLinkLanguage()}  rel="noopener noreferrer"><Trans i18nKey="footer.faq">FAQ</Trans></a></li>
                    <li><a href={faqLinkLanguage()} target='_blank' rel="noopener noreferrer"><Trans i18nKey="footer.contactus">Contact Us</Trans></a></li>
                </ul>
                <p style={{ paddingLeft: '0', paddingTop: '20px' }}>{<Trans i18nKey="footer.copyright">Copyright</Trans>} &copy; {date.getFullYear()} State of Washington</p>
            </div>
        </footer>
    )
}

export default Footer;