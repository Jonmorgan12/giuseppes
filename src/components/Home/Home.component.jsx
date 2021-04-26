import React from "react";
import "./Home.styles.css";

const Home = () => {
  return (
    <>
      <div className="home-img" alt="">
        <div className="message">
          <p>
            <b>Weekly Message:</b> We Kindly Do Not Accept Reservations
          </p>
          <p>We Will Be Closed Every Tuesday Until Further Notice</p>
          <p>Dine-In Service & Pick-Up Orders Available Wed-Monday</p>
          <p>We Are Not Offering Happy Hour Or Industry Night At This Time</p>
        </div>
        <div className="greeting-container">
          <div className="greeting">
            "Ciao, unisciti alla nostra famigdiva."
          </div>
          <div className="button-container">
            <div className="button">
              <div className="box-one"></div>
              <div className="box-two"></div>
              <div className="box-three"></div>
              <div className="button-menu">view menu</div>
            </div>
          </div>
          <div id="est">-Est. 1988-</div>
        </div>
      </div>
      {/* <div className="home-img-break"></div> */}
    </>
  );
};

export default Home;
