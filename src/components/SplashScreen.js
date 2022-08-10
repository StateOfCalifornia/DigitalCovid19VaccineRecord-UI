import React, { useEffect } from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

const SplashScreen = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title = t("SplashScreenpage.title");
  });
  useEffect(() => {
    const qrEl = document.getElementsByTagName("h1")[0];
    qrEl.setAttribute("tabindex", "0")
    qrEl?.scrollIntoView();
    qrEl.focus();

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
      <div className="container" style={{ paddingTop: 30 }}>
        <div className="row">
          <div id="paneLeft" class="shadow p-3 mb-5 bg-body rounded col-sm-4" style={{ width: 300, textAlign: "center" }}>
            <div>
              <h2 style={{ fontSize: "h5", textAlign: "center" }}>WA Verify</h2>
              <img src="/imgs/waverifylogo.png" height='71px' width='263px' alt="" />
              <p style={{ paddingBottom: 30 }}>If you are looking for your State COVID-19 Verification Record with QR Code</p>
              <ul>
                <li style={{ listStyleType: "none" }}>°&nbsp;Available in 40 languages</li>
                <li style={{ listStyleType: "none" }}>°&nbsp;SMART Health Card compatible</li>
              </ul>


              <div style={{ textAlign: "center", paddingTop: 10, paddingBottom: 10 }}>
                <img src="/imgs/add-to-apple-health.svg" alt="Add to Apple Health Logo" style={{ alignSelf: "baseline", height: "35px", paddingRight: 10 }} />
                <img src="/imgs/google-pay-black.svg" style={{ alignSelf: "baseline", height: "35px" }} alt="Google Pay Logo" />
              </div>
            </div>
            <div classname="">
              <a class="vc_general vc_btn3  vc_btn3-shape-rounded  vc_btn3-color-success" style={{ backgroundColor: "#79b974" }} href="/Dashboard" >Access Here</a>
            </div>

          </div>
          <div id="PaneCenter" class="shadow p-3 mb-5 bg-body rounded col-sm-4" style={{ width: 300, textAlign: "center" }}>
            <h2 style={{ fontSize: "h5", textAlign: "center" }}>MyIR Mobile</h2>
            <img src="/imgs/myirmobillogo.png" alt="MyIrMobile Logo" />
            <p>If you are looking for your household’s state COVID-19 Certificate</p>
            <p style={{ textAlign: "left", paddingTop: 30 }}>&nbsp;&nbsp;&nbsp;°&nbsp;Only in English</p>

            <div>
              <a class="vc_general vc_btn3  vc_btn3-shape-rounded  vc_btn3-color-success" style={{ backgroundColor: "#79b974" }} href="https://app.myirmobile.com/auth/sign-in?state=WA" target="MyIrWA">Register Here</a>
            </div>
          </div>
          <div id="PaneRight" class="shadow p-3 mb-5 bg-body rounded col-sm-4" style={{ width: 300, textAlign: "center" }}>
            <h2 style={{ fontSize: "h5", textAlign: "center" }}>State School Certificate of Immunizations</h2>
            <img src="/imgs/wastateschoolcertimmunizationslogo.png" alt="WA State School Certification of Immunizations Logo" />
            <p>If you are looking for your children’s State School Certificate of Immunizations</p>
            <p style={{ textAlign: "left", paddingTop: 30 }}>&nbsp;&nbsp;&nbsp;°&nbsp;Only in English</p>
            <div>
              <a class="vc_general vc_btn3  vc_btn3-shape-rounded  vc_btn3-color-success" style={{ backgroundColor: "#79b974" }} href="https://wa.myir.net/login/" target="StateSchool">Register Here</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SplashScreen;
