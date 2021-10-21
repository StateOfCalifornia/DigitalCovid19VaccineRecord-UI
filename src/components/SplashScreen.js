import React, { useEffect } from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"received-screen-container bodyContainer"}>
      <div>
        <h1 style={{ color: "#F06724", fontSize: "38px", marginTop: "25px" }}>
          <Trans i18nKey="SplashScreenpage.title">
            Welcome to WA Verify!
          </Trans>
        </h1>
      </div>         
    </div>
  );  
};

export default SplashScreen;
