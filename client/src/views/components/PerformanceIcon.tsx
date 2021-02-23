import React from 'react';
import styled from 'styled-components/macro';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import GradeIcon from '@material-ui/icons/Grade';

const StyledList = styled.ul`
  display: flex;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const StyledNumber = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-left: 4px;
`;

const PerformanceIcon: React.FC = () => (
  <StyledList>
    <StyledItem>
      <CheckBoxOutlinedIcon fontSize="small" />
      <StyledNumber>7</StyledNumber>
    </StyledItem>
    <StyledItem>
      <GradeIcon fontSize="small" css="color: #f5e73f;" />
      <StyledNumber>5</StyledNumber>
    </StyledItem>
  </StyledList>
);

export default PerformanceIcon;
