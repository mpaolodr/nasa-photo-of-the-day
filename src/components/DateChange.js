import React from "react";
import { DateContainer, InputField, Label } from "./Styles.js";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
// import "antd/dist/antd.css"; //affects styles even if not using antd datepicker
import { DatePicker } from "antd";

function DateChange({ dateChange }) {
  return (
    <DateContainer>
      <Label htmlFor="date">
        <InputField type="date" name="date" id="date" />
        {/* <Input type="date" style={{ color: "white" }} /> */}
        {/* <DatePicker id="date" onChange={e => console.log(e.target.value)} /> */}
      </Label>

      <Button
        style={{
          width: "50%",
          borderRadius: "10px",
          marginLeft: "10px",
          height: "30px",
          fontSize: "0.7rem",
          justifySelf: "left",
          gridColumn: "2 / 3"
        }}
        variant="contained"
        color="primary"
        onClick={dateChange}
      >
        Change Date
      </Button>
    </DateContainer>
  );
}

export default DateChange;
