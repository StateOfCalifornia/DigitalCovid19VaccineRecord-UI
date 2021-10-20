import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QrScreen from "./components/QrScreen";
import ReceivedScreen from "./components/ReceivedScreen";
import FAQScreen from "./components/FAQScreen";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayJsUtils from "@date-io/dayjs";
import "./i18n";
import "./styles/CovidCard-style.css";
import "./styles/disclosure-faq.css";
import "./styles/override/styles.scss";
import { useTranslation } from "react-i18next";

const { CREDENTIALS_GA_DEPARTMENT } = window.config;

ReactGA.initialize(CREDENTIALS_GA_DEPARTMENT);


function App() {
  // Do not remove line:24 as this will break translation
  const { i18n } = useTranslation();

  return (
    <MuiPickersUtilsProvider utils={DayJsUtils}>
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route path="/received" component={ReceivedScreen} />
          <Route path="/FAQ" component={FAQScreen} />
          <Route path="/qr/:lang/:id" component={QrScreen} />
        </Router>
        <Footer />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
