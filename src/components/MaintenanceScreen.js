import React from "react";


const Maintenance = () => {
  return (
    <div class="maintainance-container">
    <div class="fluid-container">
        <div class="maintainance-image">
            <div class="vaccineLogo">
                  <img style={{ alignSelf: "left", paddingRight: 15 }} alt={"Wa State Seal"} width="120px" src="/imgs/doh_logo_doh-black.png" />
                  <span class='logoDescription' style="font-size: 18px; display: inline-block; padding-left: 17px; color: #22489c; vertical-align: super; font-weight: 700; line-height: 1.3em; text-align: left;">Digital COVID-19 <br /> Vaccine Record</span>
              </div>
        </div>
        <div class="maintainance-content">
            <div class="maintainance-article">
                <h1 style="color: rgb(240, 103, 36); font-size:2.6em">We'll be back soon</h1>
                <p>Site is temporarily unavailable for maintenance. <br/> Please
                    check back soon. We appreciate your patience!</p>
            </div>
        </div>
    </div>
</div>
  );
};

export default Maintenance;
