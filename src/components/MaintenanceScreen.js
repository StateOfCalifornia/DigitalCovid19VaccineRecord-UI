import React from "react";
import { Link } from 'react-router-dom';

const Maintenance = () => {
  return (
    <div class="maintainance-container" style={{ paddingBottom: 300}}>
      <div class="fluid-container">

        <div class="maintainance-content" style={{ textAlign: "center"}}>
          <div class="maintainance-article">
            <h1
              style={{
                fontSize: "38px",
                fontWeight: "700",
                color: "#C84C0E",
                margin: "50px 0",
              }}
            >
              We'll be back soon
            </h1>
            <p>Site is temporarily unavailable for maintenance. <br /> Please
              check back soon. We appreciate your patience!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
