import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QRData from "./QRData";
import Pin from "./Pin";

const QrScreen = () => {
  const { id, lang } = useParams();
  const [user, setUser] = useState(null);
  const [qr, setQr] = useState(null);
  const [healthCard, setHealthCard] = useState();
  const [pin, setPin] = useState("");
  const [walletCode, setWalletCode] = useState(null);
  const [apple, setappleState] = useState(true);
  const [google, setgoogleState] = useState(true);

  // Testing data
  // const testUser = {
  //   firstName: "Test",
  //   lastName: "User",
  //   dob: "01/01/1990",
  //   walletContent: "testwalletcontent",
  //   doses: [
  //     { type: "Pfizer", doa: "2021-04-01", provider: "CVS", lotNumber: "E123" },
  //     { type: "Pfizer", doa: "2021-04-15", provider: "CVS", lotNumber: "E124" },
  //     { type: "Pfizer", doa: "2021-04-30", provider: "CVS", lotNumber: "E125" },
  //   ],
  // };
  // const testQr = "https://myvaccinerecord.cdph.ca.gov/imgs/qr-example.PNG";

  const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent;
    let OS = "not mobile";

    if (userAgent.indexOf("Mac") !== -1) OS = "A";
    if (userAgent.indexOf("Android") !== -1) OS = "G";

    return OS;
  };

  useEffect(() => {
    if (getMobileOperatingSystem() === "A") {
      setWalletCode("A");
    } else if (getMobileOperatingSystem() === "G") {
      setWalletCode("G");
    }
  }, []);

  if (user !== null && qr !== null) {
    return (
      <div className="bodyContainer qrContainer">
        <QRData
          user={user}
          qr={qr}
          apple={apple}
          google={google}
          isMobile={getMobileOperatingSystem}
        />
      </div>
    );
  } else {
    return (
      <section className="bodyContainer qrContainer">
        <article>
          <Pin
            setPin={setPin}
            setQr={setQr}
            setUser={setUser}
            pin={pin}
            id={id}
            setHealthCard={setHealthCard}
            lang={lang}
            apple={apple}
            google={google}
            walletCode={walletCode}
            isMobile={getMobileOperatingSystem}
          />
        </article>
      </section>
    );
  }
};

export default QrScreen;
