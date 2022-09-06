import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import { StyledDatePickerWrapper } from "./styles";
import "react-dates/lib/css/_datepicker.css";

const DatePicker = () => {
  moment.locale("pt-br");
  const [date, setDate] = useState(moment());
  const [focused, setFocused] = useState(false);
  console.log(date.format("DD/MM/YYYY"));
  // state = {
  //   focused: false,
  //   date: moment(),
  // };

  return (
    <StyledDatePickerWrapper>
      <SingleDatePicker
        displayFormat={"DD/MM/YYYY"} // Default: 'MM/DD/YYYY
        numberOfMonths={1}
        onDateChange={(date) => setDate(date)}
        onFocusChange={({ focused }) => setFocused(focused)}
        focused={focused}
        date={date}
      />
    </StyledDatePickerWrapper>
  );
};
export default DatePicker;
