import React, { useEffect } from "react";
import { Trans } from "react-i18next";
import ReactGA from 'react-ga';
import AppController from "../utils/AppController";
import PrintIcon from '@material-ui/icons/Print';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import html2canvas from "html2canvas";
import Canvas2Image from "../utils/canvas2image";

const QRData = ({ user, qr, apple, google, isMobile }) => {

  useEffect(() => {
    const qrEl = document.getElementById("qr_img");
    qrEl.scrollIntoView();

  }, []);

  const buildPdf = () => {

    const dataItem = document.querySelectorAll(".qrDataItem");
    let printWindow = window.open('', '', 'height=400', 'width=500');

    window.setTimeout(function () {
      printWindow.addEventListener("afterprint", function () {
        printWindow.close();
      }, false);
    }, 0);

    printWindow.document.write('<html><head><title>Digital COVID-19 Vaccine Record</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(`<img className="actual-qr-img" width = "322px" height = "322px" alt = "VaccineQrCode" src = ${qr} id = { 'id-qr-img'} /> `);
    printWindow.document.write('<br />');

    dataItem.forEach((item, idx) => {
      printWindow.document.write(item.innerHTML);
      printWindow.document.write('<br />');
      if (idx % 2 !== 0) {
        printWindow.document.write('<hr />');
      }
    });

    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }

  const handleImageSave = () => {
    const qrDiv = document.getElementById('data-for-image');
    if (window.screen.width > 768) {
      qrDiv.style.padding = '20%';
    }

    html2canvas(qrDiv).then((canvas) => Canvas2Image.saveAsPNG(canvas));
    qrDiv.style.padding = '0px';
  }

  const handlePdfSave = () => {
    buildPdf();
  }

  let isVersionGood = false;
  let imgSource = "/imgs/apple-wallet-health.svg";
  let altText = "Add to Apple Wallet & Health";
  let showMessage = false;
  const userAgent = navigator.userAgent;

  if (apple === true && isMobile() === "A") {
    const indexOfOS = userAgent.indexOf('OS');
    const versionStr = userAgent.substring(indexOfOS + 2, indexOfOS + 7);
    const versionInt = Number.parseInt(versionStr.substring(0, 3));
    const subversionInt = Number.parseInt(versionStr.substring(4))
    const isPhone = userAgent.match("iPhone"); // iPhones, iPods, and iPads in mobile mode all claim this
    const isiPad = userAgent.match("iPad"); // iPads in mobile mode claim this
    isVersionGood = isPhone && !isiPad && versionInt >= 15;

    if (versionInt === 15 && subversionInt === 0) {
      imgSource = "/imgs/add-to-apple-health.svg";
      altText = "Works with Apple Health";
    }

    if (navigator.userAgent.match("CriOS") || navigator.userAgent.match("FxiOS")) {
      showMessage = true;
    }
  }

  const useStyles = makeStyles({
    button: {
      '&:hover': {
        color: '#ffffff'
      }
    },
    buttonLeft: {
      '&:hover': {
        color: '#ffffff'
      },
      marginLeft: '2%'
    }
  });
  const classes = useStyles();

  return (
    <div className={'center-w-margin'}>
      <div>
        <h1 style={{ color: "#F06724", fontSize: "38px", marginTop: "20px" }}>
          <Trans i18nKey="qrpage.title">
            Personal Digital COVID-19 Vaccine Record
          </Trans>
        </h1>
      </div>
      <div className={'qr-flex'} style={{ display: "flex", flexWrap: "wrap" }} id={'data-for-image'}>
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
            id={'id-qr-img'}
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

        <div className="dataDiv" id="data-div">
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
            {`${user.firstName} ${user.lastName}`}
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
                  <Trans i18nKey="qrpage.dose">Dose</Trans>{" "}
                  <Trans i18nKey="qrpage.date">Date:</Trans>{" "}
                </b>
                {dose.doa}
              </p>
              <p className="qrDataItem">
                <b>
                  <Trans i18nKey="qrpage.dose">Dose</Trans>{" "}
                  <Trans i18nKey="qrpage.type">Type/Mfr:</Trans>{" "}
                </b>
                {dose.type}
              </p>
              <hr />
            </div>
          ))}

          <h2
            style={{
              color: "#22489c",
              margin: "20px 0px 0px 0px",
              fontSize: "130%",
            }}
            data-html2canvas-ignore="true"
            className={'mobile-save'}>
            <Trans i18nKey="qrpage.howtosave">To Save</Trans>
          </h2>
          <p data-html2canvas-ignore="true" id={'mobile-save'} className={'mobile-save'}>Take a screenshot<br />OR</p>
          <div className="save-buttons" data-html2canvas-ignore="true">
            <Button id={'print-button'} variant="contained" startIcon={<PrintIcon />} color={"primary"} size={'large'} className={classes.button} onClick={handlePdfSave}>Print Record</Button>
            <Button id={'save-image-button'} variant="contained" startIcon={<SaveAltIcon />} color={"primary"} size={'large'} className={classes.buttonLeft} onClick={handleImageSave}>Download Image</Button>
          </div>

          {google === true && isMobile() === "G" ? (
            <div data-html2canvas-ignore="true">
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
            </div>
          ) : null}

          {isVersionGood && apple === true && isMobile() === "A" ? (
            <div data-html2canvas-ignore="true">
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
                  id={"apple-health-button"}
                  src={imgSource}
                  alt={altText}
                />
              </ReactGA.OutboundLink>
            </div>
          ) : null}
          {showMessage ? <p style={{ fontSize: "0.75rem" }}>Use Safari web browser to save</p> : null}

          <div data-html2canvas-ignore="true">
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
