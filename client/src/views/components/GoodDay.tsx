import React from 'react';
import styled from 'styled-components/macro';
import TodayIcon from '@material-ui/icons/Today';
import PerformanceIcon from './PerformanceIcon';

const StyledWrapper = styled.div`
  background: #fff;
  border: 1px solid #d0caca;
  border-radius: 8px;
  font-weight: 300;
  padding: 20px 22px 12px;
`;

const StyledDate = styled.span`
  font-weight: bold;
  margin-left: 5px;
`;

const StyledList = styled.ul`
  margin-top: 12px;
`;

const StyledItem = styled.li`
  font-size: 14px;
  margin-left: 1em;
  text-indent: -1em;
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

// type Props = {};

const GoodDay: React.FC = () => (
  <StyledWrapper>
    <div
      css={`
        display: flex;
        align-items: flex-start;
      `}>
      <TodayIcon />
      <StyledDate>12/31</StyledDate>
    </div>
    <StyledList>
      <StyledItem>・5km走れた</StyledItem>
      <StyledItem>・ポートフォリオ作成のための</StyledItem>
    </StyledList>
    <div
      css={`
        display: flex;
        justify-content: flex-end;
        margin-top: 12px;
      `}>
      <PerformanceIcon />
    </div>
  </StyledWrapper>
);

export default GoodDay;
