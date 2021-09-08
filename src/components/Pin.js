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
  const { i18n } = useTranslation();
  const [errorMessage, setErrorMessage] = useState({});

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

  const submitPin = (e) => {

    const credentialData = walletCode !== null ? {
      Id: id,
      Pin: pin,
      WalletCode: walletCode
    } : {
      Id: id,
      Pin: pin,
    }

    e.preventDefault();
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
          setErrorMessage({ type: 'pinErrorMsg5', message: "Please contact CDPH for more info on your vaccine records." });
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
        setErrorMessage({ type: 'pinErrorMsg6', message: "Could not connect right now, please retry later." });
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


      <form onSubmit={submitPin} id={"main"}>
        <Card
          className="MuiRootCard"
          style={{ border: "none", boxShadow: "none" }}
        >

          <label htmlFor={'partitioned'} style={{ display: 'block' }}>
            <h1
              style={{ color: "#F06724", fontSize: "24px", marginBottom: "25px" }}
            >
              <Trans i18nKey="qrpage.pincode">PIN CODE:</Trans>
            </h1>
          </label>
          <div>
            <p style={{ marginLeft: "0" }}>
              <Trans i18nKey="vaccineform.enterPin">Please enter the PIN code you created to request access to your
                vaccine record.</Trans>
            </p>
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
              onBlur: (e) => e.target.value.length < 4 ? [e.target.style.background = "repeating-linear-gradient(90deg, #f44336 0, #f44336 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat", setError({ ...error, Pin: true })] : [e.target.style.background = "repeating-linear-gradient(90deg, dimgrey 0, dimgrey 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat", setError({ ...error, Pin: false })]
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
                  borderRadius: "50px",
                  padding: '10px 30px',
                  backgroundColor: pin ? "#22489C" : "gray",
                  color: "white",
                  height: '50px',
                  margin: "0px",
                  marginTop: "30px",
                  width: '123px',
                }}
                type="submit"
                size="small"
                disabled={!pin}
              >
                <Trans i18nKey="vaccineform.submitbutton">Submit</Trans>
              </button>
            )}
          </CardActions>
        </Card>
        <div style={{ color: 'red' }}>{errorMessage.message ? <Trans i18nKey={`vaccineform.${errorMessage.type}`}>{errorMessage.message}</Trans> : ''}</div>
      </form>
    </div>
  );
};

export default Pin;
