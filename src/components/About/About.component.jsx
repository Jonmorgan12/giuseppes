import React from "react";
import "./About.styles.css";

const About = () => {
  return (
    <>
      <div className="about-container1">
        <h1 className="about-heading">CUCINA RUSTICA</h1>
        <div className="about-container2">
          <em>
            <h3>GIUSEPPE'S CUCINA RUSTICA</h3>
            <p>849 Monterey St.</p>
            <p>San Luis Obispo, CA</p>
            <p>805-541-9922</p>
            <h3>OPEN DAILY</h3>
            <h3>LUNCH</h3>
            <p>11:30AM - 3:00PM</p>
            <h3>DINNER</h3>
            <p>4:30PM - 9:30PM Sun-Thurs</p>
            <p>4:30 PM - 10:30PM Fri-Sat</p>
            <div className="about-content">
              <p>
                "In 1988, Giuseppe DiFronzo breathed life into the original
                Giuseppe's Cucina in Pismo Beach. What started as a Cal Poly
                senior project has since spawned a second restaurant, located in
                thriving downtown San Luis Obispo. Much beloved by locals and
                travelers alike, Giuseppe's was an early adopter of the
                farm-to-fork philosophy."
              </p>
              <p>
                "The owner's own DiFronzo Farms produces the heirloom varietal
                vegetables and fruits found in Giuseppe's cuisine. Nestled on
                twelve acres of fertile Edna Valley soil, the working farm is a
                mecca of heirloom bounty. From figs to olives; San Marzano
                tomatoes, squash, Hachiya persimmons, Meyer lemons and five
                grape varietals that produce Giuseppe's own DiFronzo Vineyards
                brand wines, the evidence of quality is never more apparent than
                at first bite, sip and scent!"
              </p>
            </div>
          </em>
        </div>
      </div>
    </>
  );
};

export default About;
