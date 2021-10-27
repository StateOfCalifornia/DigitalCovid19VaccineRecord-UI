import React, { useEffect } from "react";
import { Trans } from "react-i18next";
import faqLinkLanguage from "../utils/faqLinkLanguage";

const ReceivedScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"received-screen-container bodyContainer"}>
      <section>
        <div>
          <h1 style={{ color: "#F06724", fontSize: "38px", marginTop: "25px" }}>
            <Trans i18nKey="receivedpage.title">
              Digital COVID-19 Vaccine Record Submission Receipt
            </Trans>
          </h1>
        </div>
        <article>
          <div style={{ marginTop: "25px" }}>
            <h2 style={{ color: "#22489C", fontSize: "24px" }}>
              <Trans i18nKey="receivedpage.thankyou">Thank you.</Trans>
            </h2>
          </div>
        </article>
        <article>
          <div>
            <p>
              <Trans i18nKey="receivedpage.content1">
                Your submission has been received. If the information provided
                matches the vaccination registry, you will receive a link to
                access your COVID-19 vaccine record.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="receivedpage.content2">
              If you do not receive a link within 24 hours, please try again and make sure your name, date of birth, phone or email match the information provided at the time of your vaccination.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="receivedpage.content3">
                If you have questions about the <a href="/" style={{  color: "#0d6efd",  margin: "0", textDecoration: "underline" }}>Digital COVID-19 Vaccine Record</a>, we have answers just
                <a href="~/faq" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline"}}>visit our FAQ</a>.
              </Trans>
            </p>
          </div>
        </article>
      </section>
{/*       <hr />
      <section>
        <h1
          style={{
            fontSize: "24px",
            marginTop: "25px",
            paddingBottom: "10px",
            fontWeight: "700",
          }}
        >
          <Trans i18nKey="receivedpage.privacyheader">
            Privacy Statement (Civil Code section 1798.17)
          </Trans>
        </h1>
        <article>
          <p style={{ fontWeight: "300", fontSize: "1rem" }}>
            <Trans i18nKey="receivedpage.privacy1">
              The Washington State Department of Health (WADOH) created the
              Digital Vaccine Record (DCVR) for use by individuals who wish to
              receive a quick response code (QR Code) for use as proof of
              COVID-19 vaccination. The information is collected pursuant to
              Health and Safety Code section 120440 and will be kept
              confidential and on file as required by law. All requested
              information is mandatory to receive a QR Code; not supplying the
              requested information will result in an inability to use DCVR.
              Please note that any and all information collected in the DCVR may
              be disclosed to the Washington State Auditor or other state and federal agencies as
              required by law.
            </Trans>
          </p>
        </article>
        <article>
          <p style={{ fontWeight: "300", fontSize: "1rem" }}>
            <Trans i18nKey="receivedpage.privacy2">
              You have the right to review records WADOH maintains about you.
              WADOH will, upon request, inform you of the location of your
              records and the categories of persons who use the information in
              those records. 
            </Trans>
          </p>
        </article>
      </section> */}
    </div>
  );
};

export default ReceivedScreen;
