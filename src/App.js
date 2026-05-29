import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Ribbon from "./components/Ribbon.jsx";
import Calendar from "./components/Calendar.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const toggleCalendar = () => {
      setCalendarVisible(prev => !prev);
  }

  return (
    <>
      <nav className={`navContainer ${theme} shadow p-3 mb-5`}>
        <NavBar theme={theme} setTheme={setTheme} onToggleCalendar={toggleCalendar}/>
        
      </nav>

      <div className={`ribbonContainer ${theme}`}>
        <Ribbon theme={theme} setTheme={setTheme} />
      </div>

      <div className={`calContainer ${theme}`}>
        <Calendar theme={theme} setTheme={setTheme} isVisible={isCalendarVisible}/>
      </div>
    </>
  );
}

export default App;
