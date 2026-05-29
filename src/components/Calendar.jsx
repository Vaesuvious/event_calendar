//To start program use 'npm run start'.
import React, {useState} from "react";
import "./Calendar.css";
//import middlewareWrapper from "cors";


const Calendar = ({setIsHidden, isVisible}) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    const goToNextMonth = () => {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
      );
    };

    const goToPrevMonth = () => {
        setCurrentDate(
          new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
      };

    const generateCalendarDays = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      const days = [];

      //Empty slots before day 1
      for (let i = 0; i < firstDay; i++){
        days.push(null);
      }

      //Actual days
      for (let day = 1; day <= daysInMonth; day++){
        days.push(day);
      }

      return days;
    };

  //{`wrapper ${isVisible ? 'sideCalAnimOpen' : 'sideCalAnimClose'}`}
  //Was within the <header> tag (<p class="current-date"> December 2025</p>)
  return (
    <>
      <div class="mini-calendar sideCalAnimOpen" style={{display: isVisible ? 'block' : 'none'}} >
        <div className="mini-calendar-header">
          <header>
            <div class="icons">
              <i 
                id="prev" 
                class="bx bx-chevron-left"
                onClick={goToPrevMonth}
              ></i>

              <span>
                {currentDate.toLocaleDateString("default", {month: "long" })}{" "}
                {currentDate.getFullYear()}
              </span>
              
              <i
                id="next"
                class="bx bx-chevron-right"
                onClick={goToNextMonth}
              ></i>
            </div>
          </header>
        </div>
        

        <div class="calendarPane ">
          <ul className="mini-calendar-grid">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          {generateCalendarDays().map((day, index) => (
            <div key= {index} className="mini-calendar-cell">
              {day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Calendar;
