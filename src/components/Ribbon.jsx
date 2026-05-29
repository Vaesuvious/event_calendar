import React from "react";
import "./Ribbon.css";

const Ribbon = () => {
  return (
    <>
      <div class="newEventBtn">
        <button type="button" class="btn btn-secondary">
          New Event
        </button>
      </div>

      <div class="dayBtn">
        <button type="button" class="btn btn-outline-secondary">
          Day
        </button>
      </div>

      <div class="weekBtn">
        <button type="button" class="btn btn-outline-secondary">
          Week
        </button>
      </div>

      <div class="monthBtn">
        <button type="button" class="btn btn-outline-secondary">
          Month
        </button>
      </div>

      <div class="yearBtn">
        <button type="button" class="btn btn-outline-secondary">
          Year
        </button>
      </div>
    </>
  );
};
export default Ribbon;
