//To start program use 'npm run start'.
import React from "react";
import "./Calendar.css";
//import middlewareWrapper from "cors";


const Calendar = ({setIsHidden, isVisible}) => {
  
  //
  //{`wrapper ${isVisible ? 'sideCalAnimOpen' : 'sideCalAnimClose'}`}
  return (
    <>
      <div class="wrapper sideCalAnimOpen" style={{display: isVisible ? 'block' : 'none'}} >
        <header>
          <p class="current-date"> December 2025</p>
          <div class="icons">
            <i id="prev" class="bx bx-chevron-left"></i>
            <i
              id="next"
              class="bx bx-chevron-right"
              
            ></i>
          </div>
        </header>

        <div class="calendarPane">
          <ul className="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="days"></ul>
        </div>
      </div>
    </>
  );
};
export default Calendar;
