import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import "../disclosureButton.js";
import { Trans } from "react-i18next";

const FAQScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"container"}>
      <h1 style={{ color: "#F06724", fontSize: "38px", marginTop: "25px", textAlign: "center" }}>
        <Trans i18nKey="FAQpage.title">
          WA Verify FAQ
        </Trans>
      </h1>
      <div class="row">
        <div class="col-sm-8">
          <dl class="faq" style={{ width: "90%", paddingLeft: 10 }}>
            <dt>
              <button aria-expanded="false" aria-controls="faq01_desc">
                <Trans i18nKey="FAQpage.01Question">
                  What is a Digital COVID-19 Verification Record?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq01_desc" class="desc">
                <Trans i18nKey="FAQpage.01Answer">
                  Your <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a> is an electronic vaccination record drawn from the
                  data stored in the state immunization registry. The digital record shows the same
                  information as your paper CDC COVID-19 vaccine card: your name, date of birth, vaccination
                  dates and type of vaccine you received. The digital record also includes a QR code that when
                  scanned by a SMART Health Card reader will display to the reader your name, date of birth,
                  vaccine dates and vaccine type. The QR code also confirms the vaccine record as an official
                  record of your state.
                </Trans>
              </p>
            </dd>
            <dt>
              <button aria-expanded="false" aria-controls="faq02_desc">
                <Trans i18nKey="FAQpage.02Question">
                  How will my verification record be delivered?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq02_desc" class="desc">
                <Trans i18nKey="FAQpage.02Answer">
                  When your verification record is found, you will receive a link delivered to the email or
                  mobile phone number associated with the vaccination record. After entering your four-digit
                  PIN, you will see your COVID-19 verification information including your name, date of birth,
                  vaccination date(s), and vaccine manufacturer. You will also receive a scannable QR code
                  confirming your verification record is authentic.
                </Trans>
              </p>
            </dd>
            <dt>
              <button aria-expanded="false" aria-controls="faq03_desc">
                <Trans i18nKey="FAQpage.03Question">
                  Can I save my digital verification record on an iPhone?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq03_desc" class="desc">
                <Trans i18nKey="FAQpage.03Answer">
                  You can save your Digital verification record to the Apple Health app with the iOS 15
                  operating system. You will need to use your Safari web browser to complete the process.
                  <br />
                  Alternatively, you can take a screenshot of your <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a> and
                  save it to your photos.
                </Trans>
              </p>
            </dd>
            <dt>
              <button aria-expanded="false" aria-controls="faq04_desc">
                <Trans i18nKey="FAQpage.04Question">
                  Can I save my Digital verification record on an Android device?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq04_desc" class="desc">
                <Trans i18nKey="FAQpage.04Answer">
                  Yes. You can save your <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a> to Google Pay if you have
                  Android version 5 and Google Play Services version 21.18 or above.
                  <br />
                  You can also screenshot your <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a> and save it to your
                  photos.
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq05_desc">
                <Trans i18nKey="FAQpage.05Question">
                  If I get additional doses, will they show on my digital verification record?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq05_desc" class="desc">
                <Trans i18nKey="FAQpage.05Answer">
                  No. If you receive an additional dose or booster dose, it will not automatically reflect on
                  your digital verification record. You will need to start over in the Digital COVID-19
                  Verification Record system to retrieve a new QR code.
                  <br />
                  We recommend waiting 3-7 days for your new dose to show up in the Immunization Registry.
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq06_desc">
                <Trans i18nKey="FAQpage.06Question">
                  When will my vaccine dose be available in my digital verification record?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq06_desc" class="desc">
                <Trans i18nKey="FAQpage.06Answer">
                  Clinics vary in the length of time it takes to submit dose information to the Immunization
                  Registry. We recommend waiting 3-7 days for your dose to show up in the system. If your
                  record is still not located, you may contact us.
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq07_desc">
                <Trans i18nKey="FAQpage.07Question">
                  What if my record is not found?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq07_desc" class="desc">
                <Trans i18nKey="FAQpage.07Answer">
                  Your vaccine provider submits your vaccination record to the Immunization Registry, but they
                  may have provided information that's incomplete. So, it's likely we have your record, but
                  not your correct information. For instance:<br /><br />
                  &nbsp;&nbsp;&nbsp;°&nbsp;Mobile phone number or email address was not included or does not match<br />
                  &nbsp;&nbsp;&nbsp;°&nbsp;Name is spelled differently<br />
                  &nbsp;&nbsp;&nbsp;°&nbsp;Date of birth does not match<br /><br />
                  To find your record, try re-entering your information with a different email or mobile number.
                  If your record still isn’t found, contact your provider to update your vaccination record or
                  contact us to request a review of your record. You'll be notified of our findings and
                  remediation actions within 2-3 weeks.
                  <br />
                  If you received your vaccination from a federal agency (like the Department of Defense, Indian
                  Health Services or Veterans Affairs), you will need to contact those agencies for assistance
                  with your vaccination.
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq08_desc">
                <Trans i18nKey="FAQpage.08Question">
                  What if my Digital Verification Record is incorrect?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq08_desc" class="desc">
                <Trans i18nKey="FAQpage.08Answer">
                  If the information on your Digital vaccine record is incorrect or missing a dose, has wrong
                  dates or incorrect brand), you may need to correct or update your immunization record. You
                  can contact your provider to update your record or contact us. You will be notified of our
                  findings and remediation actions within 2-3 weeks.
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq09_desc">
                <Trans i18nKey="FAQpage.09Question">
                  How does the Digital COVID-19 Vaccine Record system work?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq09_desc" class="desc">
                <Trans i18nKey="FAQpage.09Answer">
                  The <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a> system draws COVID-19 records from the state’s
                  immunization systems. Enter your name, date of birth, and an email or mobile phone number
                  associated with your vaccination record, then create a four-digit PIN number. If the
                  information you submitted matches the official record, you will receive a text or email with
                  a link to your <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a>. Enter the PIN you created to view the
                  record.
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq10_desc">
                <Trans i18nKey="FAQpage.10Question">
                  Will my information remain private?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq10_desc" class="desc">
                <Trans i18nKey="FAQpage.10Answer">
                  Yes. Filling out the form on the system does not provide instant access to your verification
                  record. The link to the verification record requires a PIN that you create and is sent only
                  to the mobile phone or email that is associated with your immunization record.
                  <br />
                  The QR code is a SMART Health Card, a secure copy of your verification record. More
                  information is at&nbsp;<a href="https://smarthealth.cards" target="SmartHealth" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>https://smarthealth.cards</a>. To protect your privacy, the QR code
                  can only be scanned and read by a SMART Health Card-compliant device.
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq11_desc">
                <Trans i18nKey="FAQpage.11Question">
                  Can I reset my PIN?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq11_desc" class="desc">
                <Trans i18nKey="FAQpage.11Answer">
                  Yes. You have 24 hours from the time you receive the link to enter your four-digit PIN and
                  access your <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a>. If you don't, the link to your digital
                  record will expire, but you can start over and reset your PIN using the Digital COVID-19
                  Verification Record system.
                  <br />
                  If you can't remember your PIN, after 24 hours you can use the same process and create a new
                  PIN.
                  <i>NOTE: Once you've accessed your digital record and saved your QR code, it does not
                    expire. </i>
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq12_desc">
                <Trans i18nKey="FAQpage.12Question">
                  Will this provide proof of my vaccine status?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq12_desc" class="desc">
                <Trans i18nKey="FAQpage.12Answer">
                  Yes. It is one of
                  <ReactGA.OutboundLink eventLabel="CoronaVirusLink" to={"https://coronavirus.wa.gov/information-for/you-and-your-family/life-after-vaccine"} target="CoronaVirus" style={{ display: "inline", color: "#0D6EFD", margin: "0 5px", textDecoration: "underline" }}>
                    several options
                  </ReactGA.OutboundLink>
                  for providing your <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a>
                  and can be printed or shown digitally. You may also show your CDC provided COVID-19 card or
                  your state immunization record.
                  <br />
                  You are not required to obtain a <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a>. It is an optional
                  means to obtain your COVID-19 verification information, and is the digital version of your
                  paper verification record. It is one of the options to show proof of vaccination. The state
                  will not be implementing a mandatory passport system.
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq13_desc">
                <Trans i18nKey="FAQpage.13Question">
                  What if I need to replace my vaccination card?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq13_desc" class="desc">
                <Trans i18nKey="FAQpage.13Answer">
                  The system provides a digital copy of your verification record. If you’ve lost your paper
                  verification record, you may print out your digital record and use it. If you lose your
                  <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a>, you can start the process over on the system.
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq14_desc">
                <Trans i18nKey="FAQpage.14Question">
                  What happens to my information after I share it?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq14_desc" class="desc">
                <Trans i18nKey="FAQpage.15Answer">
                  Your <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a> shows the same information as your paper CDC
                  vaccine card. You can ask organizations that will scan the QR code in your Digital COVID-19
                  Verification Record how they will use your data or if they will keep it. Only you can decide
                  how and when to share your record.
                </Trans>
              </p>
            </dd>

            <dt>
              <button aria-expanded="false" aria-controls="faq15_desc">
                <Trans i18nKey="FAQpage.15Question">
                  What if I made multiple vaccination appointments for multiple people with a single phone
                  number?
                </Trans>
              </button>
            </dt>
            <dd>
              <p id="faq15_desc" class="desc">
                <Trans i18nKey="FAQpage.15Answer">
                  If you are a parent or guardian and have created multiple appointments with a single phone
                  number or email, enter the requests one at a time to receive separate links for each
                  verification record.
                </Trans>
              </p>
            </dd>
          </dl>
        </div>
        <div class="col-sm-4">
          <h3>
            <Trans i18nKey="FAQpage.NeedHelpTitle">
              Need more help?
            </Trans>
          </h3>
          <Trans i18nKey="FAQpage.NeedHelpContent01">
            For questions and other assistance, contact:
          </Trans>
          <ul>
            <li style={{ listStyleType: "none" }}>1-800-525-0127, <Trans i18nKey="FAQpage.NeedHelpContent02">press</Trans> #</li>
            <li style={{ listStyleType: "none" }}><Trans i18nKey="FAQpage.NeedHelpContent03">Monday</Trans> 6AM-10PM</li>
            <li style={{ listStyleType: "none" }}><Trans i18nKey="FAQpage.NeedHelpContent04">Tuesday-Sunday</Trans> 6AM-6PM</li>
            <li style={{ listStyleType: "none" }}><Trans i18nKey="FAQpage.NeedHelpContent05">Closed state holidays</Trans></li>
          </ul>
          <p style={{ paddingTop: 40 }}>
            <Trans i18nKey="FAQpage.NeedHelpContent06">
              <strong>NOTE</strong>: We're unable to update your <a href="/" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a> over the phone.
            </Trans>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQScreen;
