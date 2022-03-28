import React from "react";
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

const { CREDENTIALS_GA_DEPARTMENT } = window.config;

ReactGA.initialize(CREDENTIALS_GA_DEPARTMENT);


function App(){
  // Do not remove line:24 as this will break translation
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir(i18n.language);

  return (
    <MuiPickersUtilsProvider utils={DayJsUtils}>
      <div className="App">
        <Router>
          <Header />
{/* Comment the entire section below to DISable the Maintenance page */}          
          <Route exact path="/" component={Dashboard} />
          <Route path="/received" component={ReceivedScreen} />
          <Route path="/FAQ" component={FAQScreen} />
          <Route path="/SplashScreen" component={SplashScreen} />          
          <Route path="/qr/:lang/:id" component={QrScreen} /> 
          <Route path="/Maintenance" component={MaintenanceScreen} />  

{/* Uncomment the entire section below to enable the Maintenance page */}

{/*           <Route exact path="/" component={MaintenanceScreen} />
          <Route path="/FAQ" component={FAQScreen} /> */}
            
        </Router>
        <Footer />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default withAITracking(App);
