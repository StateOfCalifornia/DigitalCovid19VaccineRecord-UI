import React from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import CovidCard from "./CovidCard";
import { Trans } from "react-i18next";
//import faqLinkLanguage from "../utils/faqLinkLanguage";
import AppController from "../utils/AppController";

const Dashboard = () => {
  return (
    <div>
      <div className="DashContainer bodyContainer">
        <section>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: "700",
              color: "#F06724",
              margin: "50px 0",
            }}
          >
            <Trans i18nKey="dashboardpage.contentheader">
              Digital COVID-19 Vaccine Record
            </Trans>
          </h1>
          <article>
            <p>
              <Trans i18nKey="dashboardpage.content1">
                Welcome to the Digital COVID-19 Vaccine Record portal. Just
                enter a few details below to get a link to a QR code and digital
                copy of your COVID-19 vaccination record. If you want to share
                your proof of vaccination, you can use the electronic version
                you’ll get from the portal or the card you were given at time of
                vaccination.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="dashboardpage.content2">
                If you are a parent or guardian and have multiple vaccine
                records associated with a mobile phone number or email
                address, enter each digital vaccine record request separately.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="dashboardpage.content3">
                The portal provides only a digital copy of your vaccine record.
                If you received your vaccinations from a federal agency (e.g.,
                Department of Defense, Indian Health Services, or Veterans
                Affairs), you will need to reach out to those agencies for
                assistance with your vaccination record.
              </Trans>
            </p>
            <p>
            <Trans i18nKey="dashboardpage.content4">
                If you have any more questions about your Digital COVID-19 Vaccine Record, <Link to="/FAQ"  style={{
                  color: "#0d6efd",
                  margin: "0",
                  textDecoration: "underline",
                }}>visit our FAQ</Link>.
              </Trans>
            </p>
          </article>
          <hr />
          <article style={{ display: "flex", justifyContent: "center" }}>
            <CovidCard />
          </article>
          <hr />
        </section>
      </div>
      <section
        className="DashContainer"
        style={{ marginBottom: "64px", marginTop: "10px", fontSize: "18px" }}
      >
        <article>
          <span>
            <Trans i18nKey="vaccineform.safe">
              Safe, free, and effective COVID-19 vaccines are now available to
              everyone age 12 and up,
              <ReactGA.OutboundLink
                eventLabel="myturn"
                to={"https://waverify.com"}
                target="_blank"
                style={{
                  display: "inline",
                  color: "#0D6EFD",
                  margin: "0 5px",
                  textDecoration: "underline",
                }}
              >
                get vaccinated.
              </ReactGA.OutboundLink>
            </Trans>
            {AppController.externalLink()}
          </span>
        </article>
      </section>
    </div>
  );
};

export default Dashboard;
