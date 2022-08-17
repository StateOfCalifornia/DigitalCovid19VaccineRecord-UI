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
import {format} from 'date-fns';
import DateFnsUtils from "@date-io/date-fns";
import addMonths from "date-fns/addMonths";

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
import { FiberNewSharp } from "@material-ui/icons";

const CovidCard = () => {
  const { t, i18n } = useTranslation();
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
  });
  const [monthOfBirth, setMonthOfBirth] = useState();
  const [dayOfBirth, setDayOfBirth] = useState();
  const [yearOfBirth, setYearOfBirth] = useState();

  const [formErrors, setFormErrors] = useState([
    {
      "id": "FirstName",
      "type": "required",
      "isInvalid": false,
      "message": "vaccineform.firstNameErrorMsg_ADA"
    },
    {
      "id": "LastName",
      "type": "required",
      "isInvalid": false,
      "message": "vaccineform.lastNameErrorMsg_ADA"
    },
    {
      "id": "Date",
      "type": "required",
      "isInvalid": false,
      "message": "vaccineform.dateOfBirthErrorMsg_ADA"
    },
    {
      "id": "Date",
      "type": "dob_format",
      "isInvalid": false,
      "message": "vaccineform.maxDateErrorMsg_ADA"
    },
    {
      "id": "Phone_Email",
      "type": "required",
      "isInvalid": false,
      "message": "vaccineform.mobileEmailErrorMsg_ADA"
    },
    {
      "id": "Phone_Email",
      "type": "phone_format",
      "isInvalid": false,
      "message": "vaccineform.mobileFormatErrorMsg_ADA"
    },
    {
      "id": "Phone_Email",
      "type": "email_format",
      "isInvalid": false,
      "message": "vaccineform.emailFormatErrorMsg_ADA"
    },
    {
      "id": "Pin",
      "isInvalid": false,
      "type": "required",
      "message": "vaccineform.pinErrorMsg_ADA"
    },
    {
      "id": "Pin",
      "isInvalid": false,
      "type": "dup_format",
      "message": "vaccineform.pinErrorMsg2"
    },
    {
      "id": "Pin",
      "isInvalid": false,
      "type": "con_format",
      "message": "vaccineform.pinErrorMsg1"
    },
    {
      "id": "submitcheckbox",
      "isInvalid": false,
      "type": "required",
      "message": "vaccineform.consentErrorMsg_ADA"
    }
  ]
  )

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
    if(checked){
      document.getElementById('submitcheckbox').setAttribute("aria-invalid", "true")
    }else{
      document.getElementById('submitcheckbox').setAttribute("aria-invalid", "false")
    }
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
      document.getElementById("partitioned").style.background = "repeating-linear-gradient(90deg, #b30000 0, #b30000 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat"
    }
    if (document.getElementById('dob') ? document.getElementById('dob').value.length < 1 : '') {
      tempErrorObj.Date = true;
    }

    setError(tempErrorObj);
  }
  const submitForm = async (e) => {
    e.preventDefault();
    let errorCheck = await formSubmitHandler();
    let valueOfElement = (id) => document.getElementsByName(id)[0];
    if (errorCheck) {
      const userData = {
        LastName: valueOfElement("LastName")?.value.trim(),
        FirstName: valueOfElement("FirstName")?.value.trim(),
        DateOfBirth: selectedBirthDate,
        PhoneNumber: valueOfElement("textmask") ? normalize(valueOfElement("textmask")?.value) : "",
        EmailAddress: document.getElementById('contactEmail')?.value ? document.getElementById('contactEmail').value : "",
        Pin: valueOfElement("PIN").value,
        Language: i18n.resolvedLanguage
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
            setResponseMessage({ type: 'pinErrorMsg7', message: t("vaccineform.pinErrorMsg7") });
          }
          else if (response.status === 429) {
            setLoading(false);
            setResponseMessage({ type: 'pinErrorMsg4', message: t("vaccineform.pinErrorMsg4") });
          }
          else if (response.status !== 200) {
            setLoading(false);
            setResponseMessage({ type: 'pinErrorMsg6', message: t("vaccineform.pinErrorMsg6") });
          }
          document.querySelector('[aria-invalid="true"]')?.scrollIntoView();
          document.querySelector('[aria-invalid="true"]')?.focus();
        })
        .catch((error) => {
          setLoading(false);
          setResponseMessage({ type: 'pinErrorMsg6', message: t("vaccineform.pinErrorMsg6") });
          document.querySelector('[aria-invalid="true"]')?.scrollIntoView();
      document.querySelector('[aria-invalid="true"]')?.focus();
        });
    }
    else {
      document.querySelector('[aria-invalid="true"]')?.scrollIntoView();
      document.querySelector('[aria-invalid="true"]')?.focus();
    }
  };

  const formSubmitHandler = async () => {
    const isEmpty = (id) => document.getElementById(id)?.value?.trim()?.length < 1;
    const isPinEmpty = (id) => document.getElementById(id)?.value?.trim()?.length < 4


    document.getElementById("FirstName").setAttribute("aria-invalid", "false");
    document.getElementById("LastName").setAttribute("aria-invalid", "false");
    document.getElementById('dob').setAttribute("aria-invalid", "false");
    if (contactType === 'Phone') {
      document.getElementById("contactPhone").setAttribute("aria-invalid", "false");
    }
    else {
      document.getElementById("contactEmail").setAttribute("aria-invalid", "false");
    }
    document.getElementById("partitioned").setAttribute("aria-invalid", "false");
    document.getElementById("submitcheckbox").setAttribute("aria-invalid", "false");
    //document.getElementsByClassName("MuiCheckbox-root")[0].style.color = "#3f51b5"
    //document.getElementById("pinlabel").style.color = "#000000"

    const tempFormErrors = formErrors.map(ele => {
      if (ele.type === 'required') {
        if (ele.id === 'FirstName' && isEmpty(ele.id)) {
          let isInvalid = ele.isInvalid;
          isInvalid = true;
          //document.getElementById("FirstName-label").style.color = "#b30000";
          
          setError({...error, FirstName: true});
          document.getElementById('FirstName').setAttribute("aria-invalid", "true");
          return { ...ele, isInvalid };
        }
        if (ele.id === 'LastName' && isEmpty(ele.id)) {
          let isInvalid = ele.true;
          isInvalid = true;
          //document.getElementById("LastName-label").style.color = "#b30000";
          setError({...error, LastName: true});
          document.getElementById('LastName').setAttribute("aria-invalid", "true");
          return { ...ele, isInvalid };
        }
        if (ele.id === 'Date' && !(selectedBirthDate)) {
          let isInvalid = ele.isInvalid;
          isInvalid = true;
          //document.getElementById('Select_Month').style.borderBottomColor = '#b30000';
          //document.getElementById('Select_Day').style.borderBottomColor = '#b30000';
          //document.getElementById('Select_Year').style.borderBottomColor = '#b30000';
          //document.getElementById('dob-label').style.color = '#b30000';
          setError({...error, Date: true});
          document.getElementById('dob').setAttribute("aria-invalid", "true");
          setIsDobGood(false);
          return { ...ele, isInvalid };
        }
        if (ele.id === 'Phone_Email') {
          
          if (contactType === "Phone" && document.getElementById('contactPhone').value.trim().length < 1) {
            //document.getElementById("contactPhone-label").style.color = "#b30000"
            let isInvalid = ele.isInvalid;
            isInvalid = true;
            document.getElementById('contactPhone').setAttribute("aria-invalid", "true");
            setError({...error, Phone_Email: true});
            return { ...ele, isInvalid };
          }
          else if (contactType === "Email" && document.getElementById('contactEmail').value.trim().length < 1){
            //document.getElementById("contactEmail-label").style.color = "#b30000"
            let isInvalid = ele.isInvalid;
            isInvalid = true;
            document.getElementById('contactEmail').setAttribute("aria-invalid", "true");
            setError({...error, Phone_Email: true});
            return { ...ele, isInvalid };
          }
          
          
          
        }
        if (ele.id === 'Pin' && isPinEmpty('partitioned')) {
          let isInvalid = ele.isInvalid;
          isInvalid = true;
          //document.getElementById("pinlabel").style.color = "#b30000"
          document.getElementById("partitioned").style.background = "repeating-linear-gradient(90deg, #b30000 0, #b30000 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat"
          document.getElementById('partitioned').setAttribute("aria-invalid", "true");
          setError({...error, Pin: true});
          return { ...ele, isInvalid };
        }
        if (ele.id === 'submitcheckbox' & !checked) {
          let isInvalid = ele.isInvalid;
          isInvalid = true;
          //document.getElementsByClassName("MuiCheckbox-root")[0].style.color = "#b30000"
          document.getElementById('submitcheckbox').setAttribute("aria-invalid", "true");
          return { ...ele, isInvalid };
        }
        let isInvalid = ele.isInvalid;
        isInvalid = false;
        return { ...ele, isInvalid };
      }

      else if (ele.type === 'dob_format') {
        if (selectedBirthDate) {

          if (!isDobGood) {
            let isInvalid = ele.isInvalid;
            isInvalid = true;
            //document.getElementById('Select_Month').style.borderBottomColor = '#b30000';
            //document.getElementById('Select_Day').style.borderBottomColor = '#b30000';
            //document.getElementById('Select_Year').style.borderBottomColor = '#b30000';
            //document.getElementById('dob-label').style.color = '#b30000';
            setError({...error, Date: true});
            document.getElementById('dob').setAttribute("aria-invalid", "true");
            return { ...ele, isInvalid };
          }
          else {
            let isInvalid = ele.isInvalid;
            isInvalid = false;
            document.getElementById('dob-label').style.color = 'black';
            //document.getElementById('Select_Month').style.borderBottomColor = '#727272';
            //document.getElementById('Select_Day').style.borderBottomColor = '#727272';
            //document.getElementById('Select_Year').style.borderBottomColor = '#727272';
            setError({...error, Date: true});
            document.getElementById('dob').setAttribute("aria-invalid", "false");
            return { ...ele, isInvalid };
          }
        }
      }
      else if (ele.type === 'phone_format') {
        if (contactType === 'Phone' ? !isEmpty('contactPhone') && document.getElementById('contactPhone')?.value.replace(/[^0-9]/g, "").length < 10 : false) {
          let isInvalid = ele.isInvalid;
          isInvalid = true;
          //document.getElementById("contactPhone-label").style.color = "#b30000"
          document.getElementById('contactPhone').setAttribute("aria-invalid", "true");
          setError({...error, Phone_Email: true});
          return { ...ele, isInvalid };
        }
      }
      else if (ele.type === 'email_format') {
        if (contactType === 'Email' && !isEmpty('contactEmail') ? 
        (!(emailRegex.test(document.getElementById('contactEmail')?.value)) 
        || !noWhiteSpaceRegex.test(document.getElementById('contactEmail')?.value) 
        || (document.getElementById('contactEmail')?.value.split('@').length>2) 
        || (document.getElementById('contactEmail')?.value.indexOf(',') > -1)
        || (document.getElementById('contactEmail')?.value.lastIndexOf('.', 0) === 0)
        || (document.getElementById('contactEmail')?.value.substr(-1) === '.')) : false) {
          let isInvalid = ele.isInvalid;
          isInvalid = true;
          //document.getElementById("contactEmail-label").style.color = "#b30000"
          document.getElementById('contactEmail').setAttribute("aria-invalid", "true");
          setError({...error, Phone_Email: true});
          return { ...ele, isInvalid };
        }
      }
      else if (ele.type === 'dup_format') {
        if (!isPinEmpty('Pin') && containsDuplicateChar(document.getElementById('partitioned').value)) {
          let isInvalid = ele.isInvalid;
          isInvalid = true;
          //document.getElementById("pinlabel").style.color = "#b30000"
          document.getElementById("partitioned").style.background = "repeating-linear-gradient(90deg, #b30000 0, #b30000 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat"
          document.getElementById('partitioned').setAttribute("aria-invalid", "true");
          setError({...error, Pin: true});
          return { ...ele, isInvalid }
        }
      }
      else if (ele.type === 'con_format') {
        if (!isPinEmpty('Pin') & containsAscending(document.getElementById('partitioned').value)) {
          let isInvalid = ele.isInvalid;
          isInvalid = true;
          //document.getElementById("pinlabel").style.color = "#b30000"
          document.getElementById("partitioned").style.background = "repeating-linear-gradient(90deg, #b30000 0, #b30000 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat"
          setError({...error, Pin: true});
          return { ...ele, isInvalid }
        }
      }
      let isInvalid = ele.isInvalid;
      isInvalid = false;
      return { ...ele, isInvalid };
    })
    setResponseMessage({})
    setFormErrors(tempFormErrors)
    let isFormValid = tempFormErrors.filter(ele => ele.isInvalid).length === 0;
    return isFormValid;
  }

  const numbersOnly = (e) => {
    if (e.target.value.length === 4) {
      e.target.style.background = "repeating-linear-gradient(90deg, dimgrey 0, dimgrey 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat";
      setError({ ...error, Pin: false });
    }
    if (containsDuplicateChar(e.target.value)) {
      setErrorMessage({ type: 'pinErrorMsg2', message: 'PIN cannot contain 4 duplicate numbers.' });
      e.target.setAttribute("aria-invalid", "true");
    }
    else if (containsAscending(e.target.value)) {
      setErrorMessage({ type: 'pinErrorMsg1', message: 'PIN cannot contain 4 consecutive numbers.' });
      e.target.setAttribute("aria-invalid", "true");
    } else {
      setErrorMessage({});
      e.target.setAttribute("aria-invalid", "false");
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
      document.getElementById('contactPhone').setAttribute("aria-invalid", "false");
    } else {
      setError({ ...error, Phone_Email: true });
      document.getElementById('contactPhone').setAttribute("aria-invalid", "true");
    }
    setFieldMasks({
      ...fieldMasks,
      [event.target.name]: event.target.value,
    });
  };

  const today = new Date();
  const handleDobChange = (date) => {
    setError({ ...error, Date: false });
    setSelectedBirthDate(date)
    if (date && date.getFullYear() && date.getFullYear() >= 1900 && date <= addMonths(today, -6)) {
      document.getElementById('dob').setAttribute("aria-invalid", "false")
      setIsDobGood(true);
    } else {
      setIsDobGood(false);
    }
  }

  const handleClickBorder = (e) => {
    e.target.classList.add('no-border');
  }

  const isValidInput = (e) => {
    e.target.setAttribute("aria-invalid", e.target.value.trim().length < 1)
    return e.target.value.trim().length < 1;
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
              onChange={(e) => isValidInput(e) ? setError({ ...error, FirstName: true }) : setError({ ...error, FirstName: false })}
              error={error.FirstName || document.getElementById('FirstName')?.getAttribute("aria-invalid") == "true"}
              onBlur={(e) => isValidInput(e) ? setError({ ...error, FirstName: true }) : setError({ ...error, FirstName: false })}
            />
            {error.FirstName || document.getElementById('FirstName')?.getAttribute("aria-invalid") == "true" ? <label id='firstNameError' htmlFor='FirstName' style={{ color: '#b30000' }}>Please enter your First Name</label> : ''}
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
              onChange={(e) => isValidInput(e) ? setError({ ...error, LastName: true }) : setError({ ...error, LastName: false })}
              error={error.LastName || document.getElementById('LastName')?.getAttribute("aria-invalid") == "true"}
              onBlur={(e) => isValidInput(e) ? setError({ ...error, LastName: true }) : setError({ ...error, LastName: false })}

            />
            {error.LastName || document.getElementById('LastName')?.getAttribute("aria-invalid") == "true" ? <label id='lastNameError' htmlFor='LastName' style={{ color: '#b30000' }}>Please enter your Last Name</label> : ''}

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
              error={error.Date || !isDobGood || document.getElementById('dob')?.getAttribute("aria-invalid") == "true"}
              aria-label='Date of birth'
              maxDate={ addMonths(today, -6) }
              onClick={() => selectLocale(i18n.resolvedLanguage.toString())}
              onBlur={(e) => e.target.value.length < 1 ? setError({ ...error, Date: true }) : setError({ ...error, Date: false })}
              okLabel={<Trans i18nKey="vaccineform.ok">Ok</Trans>}
              cancelLabel={<Trans i18nKey="vaccineform.cancel">Cancel</Trans>}
            />
            {(error.Date || !isDobGood || document.getElementById('dob')?.getAttribute("aria-invalid") == "true") && !selectedBirthDate ? <label id='dobError' htmlFor='dob' style={{ color: '#b30000' }}>Date of Birth field cannot be blank</label> : ''}
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
                  name="contactType"
                  control={<Radio aria-checked={contactType === "Phone" ? 'true' : 'false'} role={"radio"} inputProps={{ 'aria-label': 'Phone' }} color={"primary"} />}
                  label={<Trans i18nKey={"vaccineform.Phone"}>Mobile Phone</Trans>}
                  aria-label={'Mobile Phone Selector'}
                  
                />
                <FormControlLabel
                  value="Email"
                  name="contactType"
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
                  error={error.Phone_Email || document.getElementById('contactPhone')?.getAttribute("aria-invalid") == "true"}
                  onBlur={(e) => {
                    e.target.value.replace(/[^0-9]/g, "").length < 10 ? setError({ ...error, Phone_Email: true }) : setError({ ...error, Phone_Email: false });
                  }}
                />
                {error.Phone_Email || document.getElementById('contactPhone')?.getAttribute("aria-invalid") == "true" ? <label id='phoneError' htmlFor='contactPhone' style={{ color: '#b30000' }}>Please enter Mobile Phone in valid format</label> : ''}
              </FormControl>
            ) : (
              <FormControl className={"col-12"}>
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
                  document.getElementById('contactEmail').setAttribute("aria-invalid", error.Phone_Email);
                }}
                error={error.Phone_Email  || document.getElementById('contactEmail')?.getAttribute("aria-invalid") == "true"}
                onBlur={(e) => {
                  e.target.value.length < 1 ? setError({ ...error, Phone_Email: true }) : setError({ ...error, Phone_Email: false })
                  emailRegex.test(e.target.value) && noWhiteSpaceRegex.test(e.target.value) ? setError({ ...error, Phone_Email: false }) : setError({ ...error, Phone_Email: true })
                  document.getElementById('contactEmail').setAttribute("aria-invalid", error.Phone_Email);
                }}
              />
              {error.Phone_Email || document.getElementById('contactEmail')?.getAttribute("aria-invalid") == "true" ? <label id='emailError' htmlFor='contactEmail' style={{ color: '#b30000' }}>Enter a valid email address</label> : ''}
              </FormControl>
            )}
            <FormLabel component="label" style={{ color: error.Pin ? '#b30000' : 'dimgrey', marginTop: "50px" }}>
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
                    onBlur: (e) => e.target.value.length < 4 ? [e.target.style.background = "repeating-linear-gradient(90deg, #b30000 0, #b30000 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat", setError({ ...error, Pin: true })] : [e.target.style.background = "repeating-linear-gradient(90deg, dimgrey 0, dimgrey 1ch, transparent 0, transparent 1.5ch) 0 100%/100% 2px no-repeat", setError({ ...error, Pin: false })],
                    "aria-describedby": errorMessage.type ? "pinError" : null
                  }}
                  InputProps={{
                    className: classes.underline
                  }}
                  id="partitioned"
                  error={error.Pin || document.getElementById('partitioned')?.getAttribute("aria-invalid") == "true"}
                />

              </div>
            </div>
            {errorMessage.type ? <label id='pinError' htmlFor='partitioned' style={{ color: '#b30000' }}><Trans i18nKey={`vaccineform.${errorMessage.type}`}>{errorMessage.message}</Trans></label> : ''}
            {!errorMessage.type && document.getElementById('partitioned')?.value.length < 4 && document.getElementById('partitioned')?.getAttribute("aria-invalid") == "true"? <label id='pinError' htmlFor='partitioned' style={{ color: '#b30000' }}>PIN Number must be 4 characters</label> : ''}
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
                control={
                  <Checkbox
                    style={{ alignSelf: 'start', marginTop: '-5px' }}
                    checked={checked}
                    onChange={handleChange}
                    name="submitChecked"
                    color={"primary"}
                    id='submitcheckbox'
                    error = {document.getElementById('submitcheckbox')?.getAttribute("aria-invalid") == "true"}
                    inputProps={{
                      "aria-required": true,
                      "aria-label": t("vaccineform.checkboxdescription")
                    }}
                  />
                }
                className={i18n.dir(i18n.language) == "rtl" ? "checkBoxRtl" : ""}
              />
              <div>
                <Trans i18nKey="vaccineform.checkboxdescription">
                By checking this box, you are declaring under penalty of perjury under state and federal laws that you are the Patient or Parent/Guardian of the Patient and are therefore authorized to access the Patient’s immunization record.
                </Trans>
              </div>
              <br />
              {document.getElementById('submitcheckbox')?.getAttribute("aria-invalid") == "true" ? <label id='agreementError' htmlFor='submitcheckbox' style={{ color: '#b30000' }}>Policy Agreement checkbox must be selected</label> : ''}
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
								  
                  backgroundColor: "rgba(0, 0, 139, 0.85)",
                  color: "white",
                  margin: "0px",
                  display: "block",
                  display: "inline-block"
                }}
                type="submit"
                size="small"
                aria-label={t("vaccineform.submitbutton")}
                onClick={submitForm}

                
              >
                <Trans i18nKey="vaccineform.submitbutton">Submit</Trans>
              </button>

            )}
          </CardActions>
        </Card>
        <div style={{ color: '#b30000' }}>{responseMessage.message}</div>

      </form>


    </div>
  );
};

export default CovidCard;
