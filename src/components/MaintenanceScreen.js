import React from "react";
import { Link } from 'react-router-dom';

const Maintenance = () => {
  return (
    <div class="maintainance-container">
    <div class="fluid-container">
        <div class="maintainance-image">
        <div className='vaccineLogo' style={{ padding: '5px 1.5vw' }}>
            <Link to='/' style={{ display: 'inline-block', height: 'inherit', margin: '0', width: 'inherit' }}>
              <img style={{ alignSelf: "center" }} alt={"WaVerify Logo"} width="200px" src="/imgs/waverifylogo.png" />
              <span className='logoDescription' style={{ fontSize: '18px', display: 'inline-block', paddingLeft: '17px', color: '#22489c' }}>Digital COVID-19 Vaccine Record</span>
            </Link>
          </div>
        </div>
        <div class="maintainance-content">
            <div class="maintainance-article">
            <h1
            style={{
              fontSize: "38px",
              fontWeight: "700",
              color: "#F06724",
              margin: "50px 0",
            }}
          >
            We'll be back soon
          </h1>
                <p>Site is temporarily unavailable for maintenance. <br/> Please
                    check back soon. We appreciate your patience!</p>
            </div>
        </div>
    </div>
</div>
  );
};

export default Maintenance;
