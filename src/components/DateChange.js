import React from "react";

function DateChange({ dateChange }) {
  return (
    <div className="dateChange">
      <label htmlFor="date">
        <input type="date" name="date" id="date" />
      </label>
      <button onClick={dateChange}>Change Date</button>
    </div>
  );
}

export default DateChange;
