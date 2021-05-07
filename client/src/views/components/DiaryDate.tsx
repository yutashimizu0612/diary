import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import 'moment/locale/ja';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DatePickerThemeProvider from '../providers/DatePickerThemeProvider';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToday = styled.button`
  background: #fff;
  box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.16);
  border-radius: 8px;
  color: #959595;
  font-size: 18px;
  padding: 10px 16px 7px;
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledArrows = styled.div`
  background: #fff;
  box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.16);
  border-radius: 8px;
  display: flex;
  margin: 0 20px;
`;

const StyledArrow = styled.button`
  background: #fff;
  border-radius: 8px;
  padding: 0 3px;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledNavigateBeforeIcon = styled(NavigateBeforeIcon)`
  color: #808080;
  height: 100% !important;
`;

const StyledNavigateNextIcon = styled(NavigateNextIcon)`
  color: #808080;
  height: 100% !important;
`;

type Props = {
  date: moment.Moment | null;
  prev: () => void;
  next: () => void;
  backToToday: () => void;
  handleDateChange: (date: moment.Moment | null) => void;
};

moment.locale('ja');

const DiaryDate: React.FC<Props> = ({ date, prev, next, backToToday, handleDateChange }) => (
  <StyledWrapper>
    <StyledToday onClick={backToToday}>TODAY</StyledToday>
    <StyledArrows>
      <StyledArrow onClick={prev}>
        <StyledNavigateBeforeIcon fontSize="large" />
      </StyledArrow>
      <StyledArrow onClick={next}>
        <StyledNavigateNextIcon fontSize="large" />
      </StyledArrow>
    </StyledArrows>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePickerThemeProvider>
        <KeyboardDatePicker
          autoOk
          variant="inline"
          disableFuture
          value={date!.format('YYYY/MM/DD')}
          onChange={(date) => handleDateChange(date)}
          format="LLLL"
        />
      </DatePickerThemeProvider>
    </MuiPickersUtilsProvider>
  </StyledWrapper>
);

export default DiaryDate;
