import React from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import CovidCard from "./CovidCard";
import { Trans } from "react-i18next";
//import faqLinkLanguage from "../utils/faqLinkLanguage";
import AppController from "../utils/AppController";

const SplashScreen = () => {
  return (
    <div>
      <div className="DashContainer bodyContainer">
        <section>
        <h1
            style={{
              fontSize: "38px",
              fontWeight: "700",
              color: "#F06724",
              margin: "50px 0",
            }}
          >
            <Trans i18nKey="SplashScreenpage.contentheader">
            WA Verify Splash Page
            </Trans>
          </h1>          
          <table>
            <tr>

            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default SplashScreen;
