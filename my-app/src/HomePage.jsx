import React from "react";
import { Link } from "react-router-dom";

import "./Pricing.css";

const HomePage = () => {
  return (
    <div>
      <div>
        <div className="main">
          <div>
            <div className="one">
              <img src="https://gahanacademy.gahanai.co.in/assets/images/landing_pg_imgs/adas.jpg" alt="img"/>
              <div className="text">
                <h3>ADAS</h3>
                <h5>view course</h5>
              </div>
            </div>
          </div>

          <div>
            <div className="one">
              <img src="https://gahanacademy.gahanai.co.in/assets/images/landing_pg_imgs/svd_img.jpg" alt="img"/>
              <div className="text">
                <h3>Software-Defined Vehicle Development</h3>
                <h5>view course</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="buy">
          <Link to="/pay">
            <button>button</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
