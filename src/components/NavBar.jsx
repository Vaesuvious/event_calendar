import React, { useState } from "react";
import "./NavBar.css";
import Settings from "./Settings.jsx";
import "./Calendar.jsx";


const NavBar = ({ theme, setTheme, onToggleCalendar}) => {
  
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  

  const [openSettings, setSettings] = useState(false);

  return (
    <>
      <i  onClick={onToggleCalendar} type="button" class="bx bx-menu menu" title="Menu" ></i>
      <h3 class="title">Calendar</h3>

      <div className="searchBar">
        <input type="text" className="form-control" placeholder="Search..." />
        <i className="bx bx-search-alt search" title="Search"></i>
      </div>

      <div className="navOptions">
        <div id="darkmodeDiv">
          <i
            onClick={() => {
              toggle_mode();
            }}
            type="button"
            title="Toggle light/dark mode"
            className="bx bx-adjust darkmode"
          ></i>
        </div>

        <div id="bellDiv">
          <i className="bx bx-bell bell" title="Notifications"></i>
        </div>

        <div id="cogDiv" title="Settings">
          <i
            className="bx bx-cog cog"
            onClick={() => setSettings((prev) => !prev)}
          ></i>
        </div>
        {openSettings && <Settings />}
      </div>
    </>
  );
};
export default NavBar;
