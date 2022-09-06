import styled from "styled-components";
export const StyledDatePickerWrapper = styled.div`
  & .SingleDatePicker,
  .SingleDatePickerInput {
    .DateInput {
      width: 80%;
      height: 35px;
      display: flex;

      .DateInput_input {
        color: #878787;
        display: flex;
        align-items: center;
        border: none;
        justify-content: center;
        font-size: 14px;
        line-height: 16px;
        border-bottom: 2px;
        padding: 0;
        padding-top: 5px;
        background-color: #f4f4f4;
        cursor: pointer;
      }
    }
    .DayPicker_weekHeader_ul .DayPicker_weekHeader_ul_1 {
      font-size: 10px;
    }

    .SingleDatePickerInput__withBorder {
      border: none;
      border-radius: 20px;
      background-color: #f4f4f4;
      overflow: hidden;
      padding: 0;
      margin: 0;
      font-size: 10px;

      :hover,
      .DateInput_input__focused {
        border: 0 solid;
      }

      .CalendarDay__selected {
        background: blue;
        border: blueviolet;
      }
    }

    .SingleDatePicker_picker.SingleDatePicker_picker {
      top: 43px;
      left: 2px;
    }
  }
`;
