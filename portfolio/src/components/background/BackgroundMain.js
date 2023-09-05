import React from "react";
import "../styles/backgroundMain.css";
import video from "../../assets/BackgroundMp4.mp4";


const BackgroundMain = () => {
  return (
    <>
      <div className="dark-details"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="background"
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default BackgroundMain;