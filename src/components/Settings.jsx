import React, { useState, useEffect } from "react";
import "./Settings.css";

const Settings = () => {
  const [BG, setBG] = useState("lightslategray");
  const click = (BG) => {
    setBG(BG);
  };

  useEffect(() => {
    document.body.style.backgroundImage = BG;
  }, [BG]);

  return (
    <>
      <div className="settingsContainer flex flex-col">
        <h4 className="settingsTitleDiv">Settings</h4>

        <div className="bgDiv row">
          <div className="h5 appearanceDiv col-lg-3">Appearance</div>

          <div className="backgroundDiv col-lg-8">
            <div className="h4 backgroundTitleDiv">Backgrounds</div>

            <div className="holidayDiv">
              <h5>Holiday</h5>
               <img
                onClick={() => click("url('bg-image/valentines-day.jpg')")}
                src="bg-image/valentines-day.jpg"
                alt=""
                ></img>
             
              <img
                onClick={() => click("url('bg-image/easter-eggs.jpg')")}
                src="bg-image/easter-eggs.jpg"
                alt=""
              ></img>

              <img
                onClick={() => click("url('bg-image/fourth-of-july.jpg')")}
                src="bg-image/fourth-of-july.jpg"
                alt=""
              ></img>
            </div>

            <div className="decorativeDiv">
              <h5>Decorative</h5>
              <img
                onClick={() => click("url('bg-image/concept.jpg')")}
                src="bg-image/concept.jpg"
                alt=""
              ></img>

              <img
                onClick={() => click("url('bg-image/colorful-liquid.jpg')")}
                src="bg-image/colorful-liquid.jpg"
                alt=""
              ></img>

              <img
                onClick={() => click("url('bg-image/ai-generated.jpg')")}
                src="bg-image/ai-generated.jpg"
                alt=""
              ></img>
            </div>

            <div className="classicDiv">
              <h5>Classic</h5>
              <img
                onClick={() => click("url('bg-image/abstract-building.jpg')")}
                src="bg-image/abstract-building.jpg"
                alt=""
              ></img>

              <img
                onClick={() => click("url('bg-image/guitar.jpg')")}
                src="bg-image/guitar.jpg"
                alt=""
              ></img>
              
              <img
                onClick={() => click("url('bg-image/world-map.jpg')")}
                src="bg-image/world-map.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
