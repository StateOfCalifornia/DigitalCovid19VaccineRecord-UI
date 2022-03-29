import React, { useEffect, useState, useCallback  } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { KeyboardDatePicker, MuiPickersUtilsProvider  } from "@material-ui/pickers";
import {Trans, useTranslation} from "react-i18next";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PhoneMask from "./PhoneMask";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from "@date-io/date-fns";

import amLocale from "../locale/am"; 
import arLocale from "date-fns/locale/ar";
import chkLocale from "date-fns/locale/en-US"; 
import deLocale from "date-fns/locale/de";
import enLocale from "date-fns/locale/en-US"; 
import esLocale from "date-fns/locale/es"; 
import faLocale from "date-fns/locale/en-US"; 
import fjLocale from "date-fns/locale/en-US"; 
import frLocale from "date-fns/locale/fr"; 
import hiLocale from "date-fns/locale/hi"; 
import hmnLocale from "date-fns/locale/en-US"; 
import jaLocale from "date-fns/locale/ja"; 
import karLocale from "date-fns/locale/en-US"; 
import kmLocale from "date-fns/locale/km"; 
import koLocale from "date-fns/locale/ko"; 
import loLocale from "date-fns/locale/en-US"; 
import mamLocale from "date-fns/locale/en-US"; 
import mhLocale from "date-fns/locale/en-US"; 
import mxbLocale from "date-fns/locale/en-US"; 
import myLocale from "../locale/my"; 
import neLocale from "date-fns/locale/en-US"; 
import omLocale from "date-fns/locale/en-US"; 
import paLocale from "date-fns/locale/en-US"; 
import prsLocale from "date-fns/locale/en-US"; 
import psLocale from "date-fns/locale/en-US"; 
import ptLocale from "date-fns/locale/pt"; 
import roLocale from "date-fns/locale/ro"; 
import ruLocale from "date-fns/locale/ru"; 
import smLocale from "date-fns/locale/en-US"; 
import soLocale from "date-fns/locale/en-US"; 
import swLocale from "date-fns/locale/en-US"; 
import taLocale from "date-fns/locale/ta"; 
import teLocale from "date-fns/locale/te"; 
import thLocale from "date-fns/locale/th"; 
import tiLocale from "date-fns/locale/en-US"; 
import tlLocale from "date-fns/locale/en-US"; 
import toLocale from "date-fns/locale/en-US"; 
import trLocale from "date-fns/locale/tr"; 
import ukLocale from "date-fns/locale/uk"; 
import urLocale from "date-fns/locale/en-US"; 
import viLocale from "date-fns/locale/vi";  
import zhLocale from "date-fns/locale/zh-CN";  
import zhtwLocale from "date-fns/locale/zh-TW";  

const CovidCard = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  const [contactType, setContactType] = useState("Phone");
  const [fieldMasks, setFieldMasks] = useState({
    textmask: "(  )    -    ",
  });
  const [checked, setChecked] = useState(false);
  const [isDobGood, setIsDobGood] = useState(true);
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [responseMessage, setResponseMessage] = useState(false);
  const [error, setError] = useState({
    FirstName: false,
    LastName: false,
    Phone_Email: false,
    Pin: false,
    Date: false
  })

  const history = useHistory();
  const { CREDENTIALS_API_STATUS } = window.config;
  // eslint-disable-next-line no-control-regex
  const emailRegex = new RegExp(/(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
  const noWhiteSpaceRegex = new RegExp(/^\S*$/);

  useEffect(() => {
    document.querySelectorAll(".MuiButtonBase-root")[1].setAttribute("aria-label", "Date of birth")
    document.getElementById("submitcheckbox").setAttribute("aria-label", "Acknowledge Button")
    document.getElementById("partitioned").setAttribute("aria-label", "Set 4 Digit Pin")
  }, []);


  const checkFormErrors = () => {
    const hasErrors = Object.keys(error).some(k => error[k]);
    return hasErrors;
  }

  const normalize = (phone) => {
    //normalize string and remove all unnecessary characters
    phone = phone.replace(/[^\d]/g, "");

    //check if number length equals to 10
    if (phone.length === 10) {
      //reformat and return phone number
      return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }

    return null;
  };
  const handleChange = (e) => {
    finalCheck();
    setChecked(!checked);
  };

  const finalCheck = () => {
    let tempErrorObj = {
      FirstName: false,
      LastName: false,
      Phone_Email: false,
      Pin: false,
      Date: false
    };
    if (document.getElementById('FirstName') ? document.getElementById('FirstName').value.trim().length < 1 : '') {
      tempErrorObj.FirstName = true;
    }
    if (document.getElementById('LastName') ? document.getElementById('LastName').value.trim().length < 1 : '') {
      tempErrorObj.LastName = true;
    }
    if (document.getElementById('contactPhone') ? document.getElementById('contactPhone').value.replace(/[^0-9]/g, "").length < 10 : '' || !(emailRegex.test(document.getElementById('contactEmail') ? document.getElementById('contactEmail').value : '') && noWhiteSpaceRegex.test(document.getElementById('contactEmail') ? document.getElementById('contactEmail').value : ''))) {
      tempErrorObj.Phone_Email = true;
    }
    if (document.getElementById('partitioned').value.length < 4) {
      tempErrorObj.Pin = true;
      document.getElementById("partitioned").style.background = "repeating-linear-gradient(90deg, #f44336 0, #f44336 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat"
    }
    if (document.getElementById('dob') ? document.getElementById('dob').value.length < 1 : '') {
      tempErrorObj.Date = true;
    }

    setError(tempErrorObj);
  }
  const submitForm = (e) => {
    e.preventDefault();
    const { LastName, FirstName, DateOfBirth, textmask, contactType, PIN } =
      e.target.elements;
    const userData = {
      LastName: LastName.value.trim(),
      FirstName: FirstName.value.trim(),
      DateOfBirth: DateOfBirth.value,
      PhoneNumber: textmask ? normalize(textmask.value) : "",
      EmailAddress: contactType ? contactType.value : "",
      Pin: PIN.value,
      Language: i18n.resolvedLanguage.toString()
    };

    setLoading(true);
    fetch(
      `${CREDENTIALS_API_STATUS}/vaccineCredentialStatus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 200) {
          history.push("/received");
        }
        else if (response.status === 422) {
          setLoading(false);
          setResponseMessage({ type: 'pinErrorMsg7', message: "Invalid data format, please try again." });
        }
        else if (response.status === 429) {
          setLoading(false);
          setResponseMessage({ type: 'pinErrorMsg4', message: "Please try your request again in 1 minute." });
        }
        else if (response.status !== 200) {
          setLoading(false);
          setResponseMessage({ type: 'pinErrorMsg6', message: "Could not complete your request, please try again." });
        }
      })
      .catch((error) => {
        setLoading(false);
        setResponseMessage({ type: 'pinErrorMsg6', message: "Could not complete your request, please try again." });
      });
  };

  const numbersOnly = (e) => {
    if (e.target.value.length === 4) {
      e.target.style.background = "repeating-linear-gradient(90deg, dimgrey 0, dimgrey 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat";
      setError({ ...error, Pin: false });
    }
    if (containsDuplicateChar(e.target.value)) {
      setErrorMessage({ type: 'pinErrorMsg2', message: 'PIN cannot contain 4 duplicate numbers.' });
    }
    else if (containsAscending(e.target.value)) {
      setErrorMessage({ type: 'pinErrorMsg1', message: 'PIN cannot contain 4 consecutive numbers.' });
    } else {
      setErrorMessage({});
    }
    const numsOnly = e.target.value.replace(/[^0-9]/g, "");
    setPin(numsOnly);
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
  const handleContactTypeChange = (event) => {
    setError({ ...error, Phone_Email: true });
    setFieldMasks({ ...fieldMasks, textmask: '' });
    setContactType(event.target.value);
  };

  const handlePhoneChange = (event) => {
    if (event.target.value.replace(/[^0-9]/g, "").length === 10) {
      setError({ ...error, Phone_Email: false });
    } else {
      setError({ ...error, Phone_Email: true });
    }
    setFieldMasks({
      ...fieldMasks,
      [event.target.name]: event.target.value,
    });
  };

  const handleDobChange = (date) => {
    setError({ ...error, Date: false });
    setSelectedBirthDate(date)
    if (date && date.getFullYear() && date.getFullYear() >= 1900 && date.getFullYear() <= 2020) {
      setIsDobGood(true);
    } else {
      setIsDobGood(false);
    }
  }

  const handleClickBorder = (e) => {
    e.target.classList.add('no-border');
  }

  const isValidInput = (e) => {

    if (e.type === 'change') {
      return e.target.value.trim().length > 0;
    }

    if (e.type === 'blur') {
      return e.target.value.trim().length < 1;
    }
  }

  const useStyles = makeStyles({
    root: {

    },
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

  const localeMap = {
    am: amLocale,
    ar: arLocale,
    chk: chkLocale,
    de: deLocale,
    en: enLocale,
    es: esLocale,
    fa: faLocale,
    fj: fjLocale,
    fr: frLocale,
    hi: hiLocale,
    hmn: hmnLocale,
    ja: jaLocale,
    kar: karLocale,
    km: kmLocale,
    ko: koLocale,
    lo: loLocale,
    mam: mamLocale,
    mh: mhLocale,
    mxb: mxbLocale,
    my: myLocale,
    ne: neLocale,
    om: omLocale,
    pa: paLocale,
    prs: prsLocale,
    ps: psLocale,
    pt: ptLocale,
    ro: roLocale,
    ru: ruLocale,
    sm: smLocale,
    so: soLocale,
    sw: swLocale,
    ta: taLocale,
    te: teLocale,
    th: thLocale,
    ti: tiLocale,
    tl: tlLocale,
    to: toLocale,
    tr: trLocale,
    uk: ukLocale,
    ur: urLocale,
    vi: viLocale,
    zh: zhLocale,
    zhTW: zhtwLocale
  };
//NOTE: add line for each available locale supported
  
  const [locale, setLocale] = useState("en");

  const selectLocale = useCallback(locale => {
    setLocale(locale.replace('-', ''));
  }, []);

  return (
    <div className={"covid-card-container"}>
      <form
        id={"main"}
        onSubmit={submitForm}
      >
        <Card
          className="MuiRootCard"
          style={{ border: "none", boxShadow: "none" }}
        >
          <CardContent style={{ padding: "16px 12px" }}>
            <h2 className={"covid-card-header"}>
              <Trans i18nKey="vaccineform.filloutheader">
              Please fill out the required fields to receive a link to a QR code / digital copy of your COVID-19 Verification Record:
              </Trans>
            </h2>
            <div style={{ marginBottom: "15px" }}>
              <Typography>
                <Trans i18nKey="vaccineform.subtitle">
                Required fields marked with *
                </Trans>
              </Typography>
            </div>
            <TextField
              name="FirstName"
              label={<Trans i18nKey="vaccineform.firstname">First name</Trans>}
              variant="standard"
              className={"col-12"}
              inputProps={{
                maxLength: 30,
              }}
              required
              aria-label='First Name'
              id="FirstName"
              onClick={(e) => handleClickBorder(e)}
              onChange={(e) => isValidInput(e) ? setError({ ...error, FirstName: false }) : setError({ ...error, FirstName: true })}
              error={error.FirstName}
              onBlur={(e) => isValidInput(e) ? setError({ ...error, FirstName: true }) : setError({ ...error, FirstName: false })}
            />
            <TextField
              name="LastName"
              label={<Trans i18nKey="vaccineform.lastname">Last name</Trans>}
              variant="standard"
              className={"col-12"}
              inputProps={{
                maxLength: 30,
              }}
              required
              aria-label='Last name'
              id="LastName"
              onChange={(e) => isValidInput(e) ? setError({ ...error, LastName: false }) : setError({ ...error, LastName: true })}
              error={error.LastName}
              onBlur={(e) => isValidInput(e) ? setError({ ...error, LastName: true }) : setError({ ...error, LastName: false })}

            />

            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[locale]}>
            <KeyboardDatePicker
              disableToolbar
              name="DateOfBirth"
              id={"dob"}
              value={selectedBirthDate}
              onChange={handleDobChange}
              placeholder={"MM/DD/YYYY"}
              format="MM/dd/yyyy"
              invalidDateMessage={"Required Format: MM/DD/YYYY"}
              label={<Trans i18nKey="vaccineform.dateofbirth">Date of birth</Trans>}
              className={"col-12"}
              autoOk
              disableFuture
              required
              error={error.Date || !isDobGood}
              aria-label='Date of birth'
              maxDate={new Date('2021-01-01')}
              onClick={() => selectLocale(i18n.resolvedLanguage.toString())}
              onBlur={(e) => e.target.value.length < 1 ? setError({ ...error, Date: true }) : setError({ ...error, Date: false })}
            />
            </MuiPickersUtilsProvider>
            {/* <Trans i18nKey="vaccineform.phoneemailinfo">Provide the phone or email that was used when you received your COVID-19 vaccine.</Trans></p> */}
            <FormControl component="fieldset" style={{ marginTop: "50px" }}>
              <FormLabel component="legend">
                <Trans i18nKey="vaccineform.phoneemailinfo">
                Provide a mobile phone or email that may be associated with your vaccine record. If you do not get a match using your mobile phone, try again using your email address.
                </Trans>
              </FormLabel>
              <RadioGroup
                aria-label="contact type"
                name="contactTypeRadio"
                value={contactType}
                onChange={handleContactTypeChange}
                row
              >
                <FormControlLabel
                  value="Phone"
                  name="Phone"
                  control={<Radio aria-checked={contactType === "Phone" ? 'true' : 'false'} role={"radio"} inputProps={{ 'aria-label': 'Phone' }} color={"primary"} />}
                  label={<Trans i18nKey={"vaccineform.Phone"}>Mobile Phone</Trans>}
                  aria-label={'Mobile Phone Selector'}
                />
                <FormControlLabel
                  value="Email"
                  name="Email"
                  control={<Radio aria-checked={contactType === "Email" ? 'true' : 'false'} role={"radio"} inputProps={{ 'aria-label': 'Email' }} color={"primary"} />}
                  label={<Trans i18nKey={"vaccineform.Email"}>Email</Trans>}
                  aria-label={'Email Selector'}
                />
              </RadioGroup>
            </FormControl>

            {contactType === "Phone" ? (
              <FormControl className={"col-12"}>
                <TextField
                  InputProps={{
                    inputComponent: PhoneMask,
                    value: fieldMasks.textmask
                  }}


                  label={<Trans i18nKey={"vaccineform.Phone"}>Mobile Phone</Trans>}
                  placeholder={"(555) 555-5555"}
                  required
                  type='tel'
                  onChange={handlePhoneChange}
                  name="textmask"
                  id="contactPhone"
                  error={error.Phone_Email}
                  onBlur={(e) => {
                    e.target.value.replace(/[^0-9]/g, "").length < 10 ? setError({ ...error, Phone_Email: true }) : setError({ ...error, Phone_Email: false });
                  }}
                />
              </FormControl>
            ) : (
              <TextField
                name="contactType"
                label={
                  <Trans i18nKey={`vaccineform.${contactType}`}>
                    {contactType}
                  </Trans>
                }
                placeholder={"example@domain.com"}
                variant="standard"
                className={"col-12"}
                required
                inputProps={{
                  maxLength: 65,
                  pattern: "[a-zA-ZA-Z0-9._%+-]+@[a-zA-ZA-Z0-9.-]+.[a-zA-ZA-Z]{2,}$",
                }}
                type={"email"}
                id="contactEmail"
                onChange={(e) => {
                  e.target.value.length > 0 ? setError({ ...error, Phone_Email: false }) : setError({ ...error, Phone_Email: true })
                  emailRegex.test(e.target.value) && noWhiteSpaceRegex.test(e.target.value) ? setError({ ...error, Phone_Email: false }) : setError({ ...error, Phone_Email: true })
                }}
                error={error.Phone_Email}
                onBlur={(e) => {
                  e.target.value.length < 1 ? setError({ ...error, Phone_Email: true }) : setError({ ...error, Phone_Email: false })
                  emailRegex.test(e.target.value) && noWhiteSpaceRegex.test(e.target.value) ? setError({ ...error, Phone_Email: false }) : setError({ ...error, Phone_Email: true })
                }}
              />
            )}
            <FormLabel component="legend" style={{ color: error.Pin ? '#f44336' : 'dimgrey', marginTop: "50px" }}>
              <Trans i18nKey="vaccineform.pincode">
                Create a 4-digit PIN number. You'll receive a link to enter the PIN number and access your digital vaccine record. *
              </Trans>
            </FormLabel>
            <div className='pinContainer'>
              <div id='divInner'>
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

              </div>
            </div>
            <label htmlFor='partitioned' style={{ color: 'red' }}>{errorMessage.type ? <Trans i18nKey={`vaccineform.${errorMessage.type}`}>{errorMessage.message}</Trans> : ''}</label>
            <div style={{ marginBottom: "50px", marginTop: "20px" }}>
              <Trans i18nKey="vaccineform.note">
                <span
                  style={{
                    background: "#22489C",
                    borderRadius: "5px",
                    color: "#ffffff",
                    padding: "4px 5px",
                  }}
                >
                  Note:
                </span>
                {" "} Your PIN is needed to securely access your digital record.
              </Trans>
            </div>
            <div style={{ display: "flex" }}>
              <FormControlLabel
                htmlFor='submitcheckbox'
                aria-label='Policy Agree Checkbox'
                control={
                  <Checkbox
                    style={{ alignSelf: 'start', marginTop: '-5px' }}
                    checked={checked}
                    onChange={handleChange}
                    name="submitChecked"
                    color={"primary"}
                    id='submitcheckbox'
                  />
                }
                className={i18n.dir() == "rtl" ? "checkBoxRtl" : ""}
              />
              <div>
                <Trans i18nKey="vaccineform.checkboxdescription">
                By checking this box, you are declaring under penalty of perjury under state and federal laws that you are the Patient or Parent/Guardian of the Patient and are therefore authorized to access the Patient’s immunization record.
                </Trans>
              </div>
            </div>
          </CardContent>
          <CardActions style={{ marginBottom: "30px", padding: "8px 0px" }}>
            {loading ? (
              <CircularProgress />
            ) : (

              <button
                style={{
                  borderRadius: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  backgroundColor:
                    checked && !errorMessage.type && document.getElementById("partitioned").value.length === 4 && isDobGood && !checkFormErrors() ? "rgba(0, 0, 139, 0.85)" : "#bdbdbd",
                  color: "white",
                  margin: "0px",
                  display: "block",
                  display: "inline-block"
                }}
                type="submit"
                size="small"
                aria-label='submit'

                disabled={!checked || errorMessage.type || document.getElementById("partitioned").value.length !== 4 || !isDobGood || checkFormErrors()}
              >
                <Trans i18nKey="vaccineform.submitbutton">Submit</Trans>
              </button>

            )}
          </CardActions>
        </Card>
        <div style={{ color: 'red' }}>{responseMessage.message}</div>

      </form>


    </div>
  );
};

export default CovidCard;
