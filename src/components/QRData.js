import React, { useEffect } from "react";
import { Trans } from "react-i18next";
import ReactGA from 'react-ga';
import AppController from "../utils/AppController";
import ForumIcon from "@material-ui/icons/Forum";

const QRData = ({ user, qr, apple, google, isMobile }) => {
  const Normalize = (str) => {
    return str
      .split("")
      .map((char, i) => (i === 0 ? char : char.toLowerCase()))
      .join("");
  };

  useEffect(() => {
    const qrEl = document.getElementById("qr_img");
    qrEl.scrollIntoView();
  }, []);

  let isVersionGood;
  const userAgent = navigator.userAgent;

  if (apple === true && isMobile() === "A") {
    const indexOfOS = userAgent.indexOf('OS');
    const versionStr = userAgent.substring(indexOfOS + 2, indexOfOS + 5);
    isVersionGood = Number.parseInt(versionStr) >= 15;
  }

  return (
    <div className={'center-w-margin'}>
      <div>
        <h1 style={{ color: "#F06724", fontSize: "38px", marginTop: "20px" }}>
          <Trans i18nKey="qrpage.title">
            Personal Digital COVID-19 Vaccine Record
          </Trans>
        </h1>
      </div>
      <div className={'qr-flex'} style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="qrDiv" id="qr_img">
          <div className="qrImg" >
            <img alt={"ca gov logo"} width="45px" src="/imgs/cagovlogo.png" />
            State of California
          </div>
          <img
            className={'actual-qr-img'}
            width="322px"
            height="322px"
            alt={"VaccineQrCode"}
            src={qr}
          />
          <div
            className="smarthealthcard-container d-flex justify-content-between"

          >
            <span style={{ fontWeight: "700", fontSize: "18px" }}>
              SMART Health Card
            </span>
            <a href={'https://smarthealth.cards/'} target="_blank" rel="noopener noreferrer" style={{ margin: 'inherit' }}>
              <img
                src="/imgs/smart-logo.svg"
                alt="Smart Health Card"
                style={{ alignSelf: "baseline", width: "35px" }}
              />
            </a>
          </div>

        </div>

        <div className="dataDiv">
          <h2
            style={{
              color: "#22489c",
              margin: "20px 0 10px 0",
              fontSize: "130%",
            }}
          >
          </h2>
          <p className="qrDataItem">
            <b>
              <Trans i18nKey="qrpage.name">Name: </Trans>
            </b>
            {`${Normalize(user.firstName)} ${Normalize(user.lastName)}`}
          </p>
          <p className="qrDataItem">
            <b>
              <Trans i18nKey="qrpage.dateofbirth">DOB: </Trans>
            </b>
            {user.dob}
          </p>
          <hr />

          {user.doses.map((dose, idx) => (
            <div key={`dose${idx}`}>
              <p className="qrDataItem">
                <b>
                  <Trans i18nKey="qrpage.dose">Dose</Trans> #{idx + 1}{" "}
                  <Trans i18nKey="qrpage.date">Date:</Trans>{" "}
                </b>
                {dose.doa}
              </p>
              <p className="qrDataItem">
                <b>
                  <Trans i18nKey="qrpage.dose">Dose</Trans> #{idx + 1}{" "}
                  <Trans i18nKey="qrpage.type">Type/Mfr:</Trans>{" "}
                </b>
                {dose.type}
              </p>
              {/* <p className='qrDataItem'><b>Dose #{idx + 1} Provider: </b>{dose.provider}</p>
                  <p className='qrDataItem'><b>Dose #{idx + 1} Lot Number: </b>{dose.lotNumber}</p> */}
              <hr />
            </div>
          ))}
          {google === true && isMobile() === "G" ? (
            <>

              {ReactGA.event({
                category: 'google_render',
                action: 'Rendered GPay Button'
              })}


              <ReactGA.OutboundLink
                eventLabel="google_button"
                to={`${user.walletContent}`}
                style={{ margin: 'inherit' }}
              >
                <img
                  width={"300px"}
                  src={"/imgs/google-pay-black.svg"}
                  alt={"Save to Google Pay"}
                />
              </ReactGA.OutboundLink>
              <p className={"pt-2"} style={{ fontSize: "0.75rem" }}>
                <Trans i18nKey={"qrpage.minrequirements"}>
                  Minimum requirements: Android version 5 and Google Play
                  Services version 21.18 &amp; above.
                </Trans>
              </p>{" "}

            </>
          ) : null}

          {isVersionGood && apple === true && isMobile() === "A" ? (
            <>
              {ReactGA.event({
                category: 'apple_render',
                action: 'Rendered Apple Health Button'
              })}
              <ReactGA.OutboundLink
                eventLabel="apple_button"
                to={`${user.walletContent}`}
                style={{ margin: '5px 0px 0px 0px' }}
              >
                <img
                  width="250px"
                  src={"/imgs/add-to-apple-health.svg"}
                  alt={"Works with Apple Health"}
                />
              </ReactGA.OutboundLink>
            </>
          ) : null}
          <div>
            <h2
              style={{
                color: "#22489c",
                margin: "20px 0 10px 0",
                fontSize: "130%",
              }}
            >
              <Trans i18nKey="qrpage.needhelp">Need Help?</Trans>
            </h2>
            <p className={"pt-2"}>
              <Trans i18nKey={"qrpage.incorrect"}>
                If your record is not correct, please visit the CDPH
                virtual assistant
                to submit for a record review and update.
              </Trans>
            </p>
            <ForumIcon color={"primary"} />
            <Trans i18nKey={"qrpage.linkto"}>
              Link To:{" "}
            </Trans>
            <ReactGA.OutboundLink
              eventLabel="virtual_assistant"
              to={'https://chat.myturn.ca.gov/?id=17'}
              target="_blank"
              style={{
                color: "#0d6efd",
                margin: "0",
                textDecoration: "underline",
              }}
              onClick={(e) => console.log(e)}
            >
              <Trans i18nKey={"qrpage.virtualassistant"}>
                Virtual Assistant
              </Trans>
            </ReactGA.OutboundLink>
            {AppController.externalLink()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRData;
