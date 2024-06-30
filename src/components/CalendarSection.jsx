import React from "react";
import "./styles/CalendarSection.css";

const CalendarSection = () => {
  return (
    <div className="calendar-wrapper">
      <h1>Team Events Calendar</h1>
      <iframe
        src="https://embed.styledcalendar.com/#PmvG8YO9BsKhZ1izM7RT"
        title="Styled Calendar"
        class="styled-calendar-container"
        style={{ width: "100%", border: "none", height: "100%" }}
        data-cy="calendar-embed-iframe"
      ></iframe>
      <script
        async
        type="module"
        src="https://embed.styledcalendar.com/assets/parent-window.js"
      ></script>
    </div>
  );
};

export default CalendarSection;
