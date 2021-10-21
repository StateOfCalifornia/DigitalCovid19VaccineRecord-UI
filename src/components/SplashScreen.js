import React, { useEffect } from "react";
import { Trans } from "react-i18next";

const SplashScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className="received-screen-container bodyContainer">
        <section>
        <h1
            style={{
              fontSize: "38px",
              fontWeight: "700",
              color: "#F06724",
              margin: "50px 0",
            }}
          >
            Welcome to WA Verify!
          </h1>          
            <div style="text-align: center;">
              To access your online verification records, please select from the options below.
              <br />
              If you have questions about WA Verify, please call 800-525-0127, press #
            </div>
            <div style="border: 1px solid black;">
              {/* Left Pane */}
              <div id="PaneLeft">
                WA Verify<br />
                <img src="/imgs/waverifylogo.png" height='71px' width='263px' alt="WaVerify Logo" /><br />
                If you are looking for your State COVID-19 Verification Record with QR Code
                <ul>
                  <li>*Available in 40 languages</li>
                  <li>*SMART Health Card compatible</li>
                </ul>
                <img src="/imgs/add-to-apple-health.svg"  alt="Add to Apple Health Logo" />
                <img src="/imgs/smart-logo.svg"  alt="SmartHealth Logo" />
                <div style="border: 1px solid black; background-color: lightgreen;">
                  <Link to="/Dashboard"  style={{
                  color: "#0d6efd",
                  margin: "0",
                  textDecoration: "underline",
                  }}>Access Here</Link>
                </div>                
              </div>

              {/* Center Pane */}
              <div id="PaneCenter">
                MyIR Mobile<br />
                <img src="/imgs/myirmobillogo.png"  alt="MyIrMobile Logo" /><br />
                If you are looking for your household’s state COVID-19 Certificate
                <ul>
                  <li>Only in English</li>
                </ul>
                <div style="border: 1px solid black; background-color: lightgreen;">
                  <Link to="/Dashboard"  style={{
                  color: "#0d6efd",
                  margin: "0",
                  textDecoration: "underline",
                  }}>Register Here</Link>
                </div>                
              </div>

              {/* Right Pane */}
              <div id="PaneRight">
              State School Certificate of Immunizations<br />
                <img src="/imgs/wastateschoolcertimmunizationslogo.png"  alt="WA State School Certification of Immunizations Logo" /><br />
                If you are looking for your children’s State School Certificate of Immunizations
                <ul>
                  <li>Only in English</li>
                </ul>
                <img src="/imgs/add-to-apple-health.svg"  alt="Add to Apple Health Logo" />
                <img src="/imgs/smart-logo.svg"  alt="SmartHealth Logo" />
              </div>
              <div style="border: 1px solid black; background-color: lightgreen;">
              <Link to="/Dashboard"  style={{
                  color: "#0d6efd",
                  margin: "0",
                  textDecoration: "underline",
                }}>Access Here</Link>
                </div>                                
            </div>
            
        </section>
      </div>
  );  

};

export default SplashScreen;
