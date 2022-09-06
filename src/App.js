import React, {useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Dashboard from "./components/Dashboard";
import MaintenanceScreen from "./components/MaintenanceScreen";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QrScreen from "./components/QrScreen";
import ReceivedScreen from "./components/ReceivedScreen";
import FAQScreen from "./components/FAQScreen";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import DayJsUtils from "@date-io/dayjs";
import "./i18n";
import "./styles/CovidCard-style.css";
import "./styles/ButtonStyles.min.css";
import "./styles/override/styles.scss";
import { useTranslation } from "react-i18next";
import withAITracking  from './AppInsights';
import { appInsights } from './AppInsights';
import { SeverityLevel } from '@microsoft/applicationinsights-web';

const { CREDENTIALS_GA_DEPARTMENT } = window.config;


ReactGA.initialize(CREDENTIALS_GA_DEPARTMENT);


function App() {
  // Do not remove line:24 as this will break translation
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir(i18n.language);
  document.documentElement.lang = i18n.language;

  // Application Insight Log entry to track requested language code.
  if(i18n.language !== undefined)
  {
    if((sessionStorage.getItem("requestedLanguageCode") === null) || (sessionStorage.getItem("requestedLanguageCode") !== null && sessionStorage.getItem("requestedLanguageCode") !== i18n.language))
    {
      sessionStorage.setItem("requestedLanguageCode", i18n.language);
      appInsights.trackTrace({
        message: 'Requested Language Code: ' + sessionStorage.getItem("requestedLanguageCode"), severityLevel: SeverityLevel.Information,
        properties:{
          'LogLevel': 'Information',
          'Category': 'DigitalCovid19VaccineRecord-UI',
          'File': 'App.js',
          'Function': 'App()',
          'User Agent': window.navigator.userAgent
      }});
    }
  }

  return (
    <MuiPickersUtilsProvider utils={DayJsUtils}>
      <div className="App">
        <Router>
          <Header />
          <main>
{/* Comment the entire section below to DISable the Maintenance page */}          
          {/*<Route exact path="/" component={Dashboard} />
          <Route path="/received" component={ReceivedScreen} />
          <Route path="/FAQ" component={FAQScreen} />
          <Route path="/SplashScreen" component={SplashScreen} />          
          <Route path="/qr/:lang/:id" component={QrScreen} /> 
  <Route path="/Maintenance" component={MaintenanceScreen} />  */}

{/* Uncomment the entire section below to enable the Maintenance page */}

           <Route exact path="/" component={MaintenanceScreen} />
          <Route path="/FAQ" component={FAQScreen} /> 
            
</main>
        </Router>
        <Footer />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default withAITracking(App);
