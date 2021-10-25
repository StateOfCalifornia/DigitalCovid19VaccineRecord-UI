import React, { useEffect } from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";


const SplashScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"ebor-page-wrapper received-screen-container bodyContainer"}>
      <div>
        <h1 style={{ color: "#F06724", fontSize: "38px", marginTop: "25px", textAlign: "center" }}>
          <Trans i18nKey="SplashScreenpage.title">
            Welcome to WA Verify!
          </Trans>
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        To access your online verification records, please select from the options below.
        <br />
        If you have questions about WA Verify, please call 800-525-0127, press #
      </div>
      <div className="container">
        <div className="row">
          <div id="paneLeft" class="shadow p-3 mb-5 bg-body rounded col-sm-4">
            <h5 >WA Verify</h5>
            <img src="/imgs/waverifylogo.png" height='71px' width='263px' alt="WaVerify Logo" />
            <p style={{ paddingBottom: 30 }}>If you are looking for your State COVID-19 Verification Record with QR Code</p>
            <div style={{ textAlign: "left" }}>
              &nbsp;&nbsp;&nbsp;°&nbsp;Available in 40 languages<br />
              &nbsp;&nbsp;&nbsp;°&nbsp;SMART Health Card compatible<br />
            </div>
            <div style={{ textAlign: "center", paddingTop: 10, paddingBottom: 10 }}>
              <img src="/imgs/add-to-apple-health.svg" alt="Add to Apple Health Logo" style={{ alignSelf: "baseline", height: "35px", paddingRight: 10 }} />
              <img src="/imgs/google-pay-black.svg" style={{ alignSelf: "baseline", height: "35px" }} alt="Google Pay Logo" />
            </div>
            <div>
                <a class="vc_general vc_btn3  vc_btn3-shape-rounded  vc_btn3-color-success" style={{backgroundColor: "#79b974"}} href="/Dashboard" title="Click here to go to the WaVerify Verification Record page">Access Here</a>
            </div>
          </div>
          <div id="PaneCenter" class="shadow p-3 mb-5 bg-body rounded col-sm-4">
            <h5 style={{ textAlign: "center" }}>MyIR Mobile</h5>
            <img src="/imgs/myirmobillogo.png" alt="MyIrMobile Logo" />
            <p>If you are looking for your household’s state COVID-19 Certificate</p>
            <p style={{ textAlign: "left", paddingTop: 30 }}>&nbsp;&nbsp;&nbsp;°&nbsp;Only in English</p>

            <div>
                <a class="vc_general vc_btn3  vc_btn3-shape-rounded  vc_btn3-color-success" style={{backgroundColor: "#79b974"}} href="https://app.myirmobile.com/auth/sign-in?state=WA" title="Click here to go to the MyIr Mobile site for Washington State" target="MyIrWA">Register Here</a>
            </div>
          </div>
          <div id="PaneRight" class="shadow p-3 mb-5 bg-body rounded col-sm-4">
            <h5 style={{ textAlign: "center" }}>State School Certificate of Immunizations</h5>
            <img src="/imgs/wastateschoolcertimmunizationslogo.png" alt="WA State School Certification of Immunizations Logo" />
            <p>If you are looking for your children’s State School Certificate of Immunizations</p>
            <p style={{ textAlign: "left", paddingTop: 30 }}>&nbsp;&nbsp;&nbsp;°&nbsp;Only in English</p>
            <div>
                <a class="vc_general vc_btn3  vc_btn3-shape-rounded  vc_btn3-color-success" style={{backgroundColor: "#79b974"}} href="https://wa.myir.net/login/" title="Click here to go to the State School Certificate of Immunizations site" target="StateSchool">Register Here</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SplashScreen;
