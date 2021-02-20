import React from 'react';
import styled from 'styled-components/macro';
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
  padding: 9px 16px 6px;
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledArrows = styled.div`
  background: #fff;
  box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.16);
  border-radius: 8px;
  display: inline-block;
  margin: 0 20px;
  padding: 4px 2px 0px;
`;

const StyledArrow = styled.button`
  background: #fff;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledDate = styled.span`
  font-size: 28px;
  font-weight: 300;
  margin-right: 20px;
`;

// type Props = {};

const DiaryDate: React.FC = () => (
  <StyledWrapper>
    <StyledToday>TODAY</StyledToday>
    <StyledArrows>
      <StyledArrow>
        <NavigateBeforeIcon css="color: #808080;" />
      </StyledArrow>
      <StyledArrow>
        <NavigateNextIcon css="color: #808080;" />
      </StyledArrow>
    </StyledArrows>
    <StyledDate>Thursday 31 December 2020</StyledDate>
    <CalendarTodayIcon fontSize="large" />
  </StyledWrapper>
);

export default DiaryDate;
