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
              <Trans i18nKey="receivedpage.content3">
                If you have questions about the Digital COVID-19 Vaccine Record, we have answers just <a href={faqLinkLanguage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0d6efd",
                    margin: "0",
                    textDecoration: "underline",
                  }}>visit our FAQ</a>.
              </Trans>
            </p>
          </div>
        </article>
      </section>
      <hr />
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
              The California Department of Public Health (CDPH) created the
              Digital Vaccine Record (DCVR) for use by individuals who wish to
              receive a quick response code (QR Code) for use as proof of
              COVID-19 vaccination. The information is collected pursuant to
              Health and Safety Code section 120440 and will be kept
              confidential and on file as required by law. All requested
              information is mandatory to receive a QR Code; not supplying the
              requested information will result in an inability to use DCVR.
              Please note that any and all information collected in the DCVR may
              be disclosed to the California State Auditor, the California
              Office of Health Information Integrity, the California Office of
              Information Security, or other state and federal agencies as
              required by law.
            </Trans>
          </p>
        </article>
        <article>
          <p style={{ fontWeight: "300", fontSize: "1rem" }}>
            <Trans i18nKey="receivedpage.privacy2">
              You have the right to review records CDPH maintains about you.
              CDPH will, upon request, inform you of the location of your
              records and the categories of persons who use the information in
              those records. For more information, contact Chief, Immunization
              Branch, California Department of Public Health, 850 Marina Bay
              Pkwy, Bldg. P, Richmond, CA 94804 or by phone (800) 578-7889.
            </Trans>
          </p>
        </article>
      </section>
    </div>
  );
};

export default ReceivedScreen;
