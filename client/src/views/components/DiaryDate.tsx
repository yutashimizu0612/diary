import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
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

const StyledDate = styled.span`
  font-size: 28px;
  font-weight: 300;
  margin-right: 20px;
`;

type Props = {
  date: string;
  prev: () => void;
  next: () => void;
  backToToday: () => void;
};

const DiaryDate: React.FC<Props> = ({ date, prev, next, backToToday }) => (
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
    <StyledDate>{moment(date).format('dddd, MMMM DD YYYY')}</StyledDate>
    <CalendarTodayIcon fontSize="large" />
  </StyledWrapper>
);

export default DiaryDate;
