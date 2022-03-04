import React from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import CovidCard from "./CovidCard";
import { Trans } from "react-i18next";
import faqLinkLanguage from "../utils/faqLinkLanguage";
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
              Digital COVID-19 Verification Record
            </Trans>
          </h1>
          <article>
            <p>
              <Trans i18nKey="dashboardpage.content1">
                Welcome to the Digital COVID-19 Verification Record system. Enter a few details below to get a link to a QR code and digital copy of your COVID-19 verification record. If you want to share proof of vaccination, you can use either the electronic or a printed version of the record you’ll get from the system.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="dashboardpage.content2">
                People within a family may have multiple verification records associated with a single phone number or email address, enter each digital verification record request separately.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="dashboardpage.content3">
                The system provides a digital copy of state vaccine records. If you received your vaccinations from a federal agency (Department of Defense, Indian Health Services, or Veterans Affairs), you will need to contact those agencies for assistance.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="dashboardpage.content4">
                If you have questions about your Digital COVID-19 Verification Record, visit the Frequently Asked Questions
                (
                <a href="/faq" rel="noopener noreferrer" style={{ color: "#0d6efd", margin: "0", textDecoration: "underline" }}></a>
                ).
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
        style={{ marginBottom: "64px", marginTop: "10px", fontSize: "18px", display: none}}
      >
        <article>
          <span>
            <Trans i18nKey="vaccineform.safe">
            Safe, free, and effective COVID-19 vaccines are now available to everyone age 5 and older,
              <ReactGA.OutboundLink
                eventLabel="VaccineLocator"
                to={"https://vaccinelocator.doh.wa.gov/"}
                target="VaccineLocator"
                style={{
                  display: "inline",
                  color: "#0D6EFD",
                  margin: "0 5px",
                  textDecoration: "underline"
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
