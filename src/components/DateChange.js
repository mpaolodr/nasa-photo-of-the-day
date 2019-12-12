import React from "react";
import { DateContainer, InputField, Button, Label } from "./Styles.js";

function DateChange({ dateChange }) {
  return (
    <DateContainer>
      <Label htmlFor="date">
        <InputField type="date" name="date" id="date" />
      </Label>
      <Button onClick={dateChange}>Change Date</Button>
    </DateContainer>
  );
}

export default DateChange;
