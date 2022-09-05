import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import { StyledDatePickerWrapper } from "./styles";

import "react-dates/lib/css/_datepicker.css";

export default class DatePicker extends React.Component {
  state = {
    focused: false,
    date: moment(),
  };
  render() {
    return (
      <StyledDatePickerWrapper>
        <SingleDatePicker
          numberOfMonths={1}
          onDateChange={(date) => this.setState({ date })}
          onFocusChange={({ focused }) => this.setState({ focused })}
          focused={this.state.focused}
          date={this.state.date}
        />
      </StyledDatePickerWrapper>
    );
  }
}
