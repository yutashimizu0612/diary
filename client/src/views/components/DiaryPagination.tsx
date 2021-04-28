import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledArrow = styled.button`
  background: #fff;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledDate = styled.span`
  color: #808080;
  font-weight: 300;
  margin: 0 10px;
`;

type Props = {
  date: moment.Moment | null;
  prev: () => void;
  next: () => void;
};

const DiaryPagination: React.FC<Props> = ({ date, prev, next }) => (
  <StyledWrapper>
    <StyledArrow onClick={prev}>
      <NavigateBeforeIcon css="color: #808080;" />
    </StyledArrow>
    <StyledDate>{date!.format('YYYY/MM/DD')}</StyledDate>
    <StyledArrow onClick={next}>
      <NavigateNextIcon css="color: #808080;" />
    </StyledArrow>
  </StyledWrapper>
);

export default DiaryPagination;
