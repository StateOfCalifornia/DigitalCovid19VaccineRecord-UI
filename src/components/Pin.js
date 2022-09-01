/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

import { Trans, useTranslation } from "react-i18next";

const Pin = ({ pin, setPin, setQr, setUser, id, setHealthCard, lang, walletCode }) => {
  const [loading, setLoading] = useState(false);
  const { i18n, t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    const qrEl = document.getElementsByTagName("h1")[0];
    qrEl.setAttribute("tabindex","0")
    qrEl?.scrollIntoView();
    qrEl.focus();
  }, []);

  useEffect(() => {
    document.title = t("qrpage.pincode");
  });

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {

    // console.log('the current state for Wallet Code is...2', walletCode);


    changeLanguage(lang);
  }, [walletCode]);

  const [error, setError] = useState({
    FirstName: false,
    LastName: false,
    Phone: false,
    Email: false,
    Pin: false,
    Date: false
  })
  const { CREDENTIALS_API_QR } = window.config;

  const getBlobUrl = (data, type) => {
    const byteCharacters = atob(data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: type });

    return URL.createObjectURL(blob);
  };
  const containsAscending = (str) => {
    const strArr = str.split("");
    let ascendingFlag = false;
    for (let i = 0; i < str.length - 2; i++) {
      if (
        parseInt(strArr[i]) + 1 === parseInt(strArr[i + 1]) &&
        parseInt(strArr[i]) + 2 === parseInt(strArr[i + 2]) &&
        parseInt(strArr[i]) + 3 === parseInt(strArr[i + 3])
      ) {
        ascendingFlag = true;
      }
    }
    if (ascendingFlag) {
      return true;
    } else {
      return false;
    }
  };

  const containsDuplicateChar = (str) => {
    let counts = {};
    let duplicateFlag = false;
    if (str.length > 0) {
      let charArr = str.split("");
      charArr.forEach((n) => {
        counts[n] = counts[n] || 0;
        counts[n]++;
        if (counts[n] === 4) {
          duplicateFlag = true;
        }
      });
    }
    if (duplicateFlag) return true;
    else return false;
  };

  const submitPin = (e) => {
    e.preventDefault();
    const credentialData = walletCode !== null ? {
      Id: id,
      Pin: pin,
      WalletCode: walletCode
    } : {
      Id: id,
      Pin: pin,
    }

    if (pin.length != 4) {
      setErrorMessage({ type: 'pinErrorMsg3', message: 'Please enter a valid PIN' });
      return;
    }
    if (containsDuplicateChar(pin)) {
      setErrorMessage({ type: 'pinErrorMsg2', message: 'PIN cannot contain 4 duplicate numbers.' });
      return;
    }
    if (containsAscending(pin)) {
      setErrorMessage({ type: 'pinErrorMsg1', message: 'PIN cannot contain 4 consecutive numbers.' });
      return;
    } 
    
    
    let status = 0;
    setLoading(true);
    fetch(`${CREDENTIALS_API_QR}/vaccineCredential`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentialData)
    })
      .then((res) => {
        if (res.status === 404) {
          setErrorMessage({ type: 'pinErrorMsg3', message: "The PIN entered is invalid. Please retry by clicking the link provided to you to re-enter your PIN." });
          setLoading(false);
        }
        else if (res.status === 429) {
          setErrorMessage({ type: 'pinErrorMsg4', message: "Please try your request again in 1 minute." });
          setLoading(false);
        }
        else if (res.status === 422) {
          setErrorMessage({ type: 'pinErrorMsg5', message: "Please contact WADOH for more info on your vaccine records." });
          setLoading(false);
        }
        else if (res.status !== 200) {
          setLoading(false);
          setErrorMessage({ type: 'pinErrorMsg6', message: "Could not complete the request, please retry later." });
        }
        status = res.status;
        return res.json();
      })
      .then((data) => {
        if (status === 200) {
          setUser(data);
          setQr(getBlobUrl(data.fileContentQr, data.mimeTypeQr));
          setHealthCard(
            getBlobUrl(data.fileContentSmartCard, data.mimeTypeSmartCard)
          );
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage({ type: 'pinErrorMsg6', message: err.message });
        //setErrorMessage({ type: 'pinErrorMsg6', message: "Could not connect right now, please retry later." });
      });
  };

  const numbersOnly = (e) => {
    if (e.target.value.length === 4) {
      e.target.style.background = "repeating-linear-gradient(90deg, dimgrey 0, dimgrey 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat";
      setError({ ...error, Pin: false });
    }
    const numsOnly = e.target.value.replace(/[^0-9]/g, "");
    setPin(numsOnly);
  };

  const useStyles = makeStyles({
    underline: {
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    }
  });
  const classes = useStyles();
  return (
    <div className="pin-container" style={{ margin: "30px" }}>


      <form onSubmit={submitPin} id={"main"} noValidate>
        <Card
          className="MuiRootCard"
          style={{ border: "none", boxShadow: "none" }}
        >

            <h1
              style={{ color: "#C84C0E", fontSize: "24px", marginBottom: "25px", lineHeight: "1.38" }}
            >
              <Trans i18nKey="qrpage.pincode">PIN CODE:</Trans>
            </h1>

          <div>
            <label style={{ marginLeft: "0" }} htmlFor={'partitioned'}>
              <Trans i18nKey="vaccineform.enterPin">Please enter the PIN code you created to request access to your
                vaccine record.</Trans>
            </label>
          </div>

          <TextField
            inputProps={{
              autoComplete: "off",
              type: 'tel',
              name: "PIN",
              value: pin,
              onChange: numbersOnly,
              maxLength: 4,
              minLength: 4,
              required: true,
              onBlur: (e) => e.target.value.length < 4 ? [e.target.style.background = "repeating-linear-gradient(90deg, #b30000 0, #b30000 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat", setError({ ...error, Pin: true })] : [e.target.style.background = "repeating-linear-gradient(90deg, dimgrey 0, dimgrey 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat", setError({ ...error, Pin: false })],
              "aria-describedby": errorMessage.type ? "pinError" : null
            }}
            InputProps={{
              className: classes.underline
            }}
            id="partitioned"
          />

          <CardActions style={{ padding: "8px 0px" }}>
            {loading ? (
              <CircularProgress />
            ) : (
              <button
                style={{
                  borderRadius: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textAlign: "center",
                  backgroundColor: pin ? "#22489C" : "gray",
                  color: "white",
                  margin: "0px",
                  marginTop: "30px",
                  display: "block",
                  display: "inline-block"
                }}
                type="submit"
                size="small"
                
              >
                <Trans i18nKey="vaccineform.submitbutton">Submit</Trans>
              </button>
            )}
          </CardActions>
        </Card>
        <div style={{ color: '#b30000' }} id="pinError">{errorMessage.message ? <Trans i18nKey={`vaccineform.${errorMessage.type}`}>{errorMessage.message}</Trans> : ''}</div>
      </form>
    </div>
  );
};

export default Pin;
