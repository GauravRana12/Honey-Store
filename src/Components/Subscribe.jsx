import React from "react";
import HomeButtons from "./hompage_components/HomeButtons";
import Style from "../Styles/subscribe.css";
const Subscribe = () => {
  return (
    <div className="apple">
      <p
        className="quote"
        style={{ color: "#000000", backgroundColor: "#F05A1F" }}
      >
        <marquee>
          UNIQUE TASTE,UNIQUE AROMA OF RAW HONEY AND ORGANIC
          PRODUCTS:GRANOLA,HONEY BARS AND DESERTS,HERBAL TEA FROM POLAND
        </marquee>
      </p>
      <div className="subscribe">
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <h5 className="signup_updates">SIGNUP FOR NEWS,UPDATES AND SPECIAL OFFERS! LET IT BEE:)</h5>
        <p>
          <input className="inp" placeholder="YOUR EMAIL"></input>{" "}
          <HomeButtons name={"SUBSCRIBE"} />
        </p>
        <p>
          {" "}
          <input type="checkbox"></input>
          by pressing button Subscribe,I consent to the processing of personal
          data to agree to the privacy policy
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
