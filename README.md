
![Digital Vaccine Record](/public/imgs/MyTurn-logo.png "Digital Vaccine Record")

# Introduction

Welcome to the State of California's Digital Vaccine Record(DVR). The DVR tool was created to allow anyone vaccinated in California to easily retrieve their digital vaccine record as a Quick Response(QR) code. The QR code follows the [SMART health card](https://smarthealth.cards/) protocol, and can be used as proof of vaccination.

# Features
<ul>
<li>SMART health card protocol ensures secure delivery of vaccine record</li>
<li>QR code can be stored on mobile device using G Pay or Apple Health</li>
</ul>

# Getting Started

1. Clone this repository
2. Use the command `npm install` to install the necessary dependencies.
3. Use the command `npm run start` to start the application.

---

![Digital Vaccine Record QR Code Example](/public/imgs/docs/sample-qr.png "Digital Vaccine Record QR Code Example")

# Configuration

The URLs found in ``public/config.js`` will need to be updated to point to the API that you intend to call to retrieve vaccination data.  
 The default value is ``https://localhost:5001``.

# Using Google Analytics

To use [Google Analytics](https://developers.google.com/analytics):

1. Set up a Google Analytics account [here](https://support.google.com/analytics/answer/1008015) to get an id.
2.  Update the id number in the Google Analytics script, found in ``public/index.html``.  
 Line 54: `<script async src="https://www.googletagmanager.com/gtag/js?id=[your id goes here]"></script>`  
 Line 67: `gtag('config', '[your id goes here]');`

# Build

Use the command ``npm run build`` to generate a build folder containing the files to be hosted.

# NPM Dependencies

- [Babel Core](https://babeljs.io/docs/en/babel-core)
- [Date IO](https://www.npmjs.com/package/@date-io/core)
- [Material UI](https://material-ui.com/)
- [Testing Library](https://testing-library.com/)
- [Day.js](https://day.js.org/)
- [i18next](https://www.i18next.com/)
- [i18next Browser Language Detector](https://www.npmjs.com/package/i18next-browser-languagedetector)
- [i18next Http Backend](https://www.npmjs.com/package/i18next-http-backend)
- [ReactJS](https://reactjs.org/)
- [ReactDOM](https://reactjs.org/docs/react-dom.html)
- [React Google Analytics](https://www.npmjs.com/package/react-ga)
- [React i18next](https://www.npmjs.com/package/react-i18next)
- [React Router Dom](https://reactrouter.com/)
- [React Scripts](https://www.npmjs.com/package/react-scripts)
- [React Text Mask](https://www.npmjs.com/package/react-text-mask)
- [SASS](https://sass-lang.com/)
- [Web Vitals](https://www.npmjs.com/package/web-vitals)

# Resources

- [Digital Vaccine Record](https://myvaccinerecord.cdph.ca.gov/) (Digital Vaccine Record Website)
