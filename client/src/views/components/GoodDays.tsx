import React from 'react';
import styled from 'styled-components/macro';
import GoodDay from './GoodDay';

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StyledItem = styled.li`
  width: 32%;
  &:not(:nth-of-type(3n)) {
    margin-right: 2%;
  }
  &:nth-child(n + 4) {
    margin-top: 2%;
  }
`;

const GoodDays: React.FC = () => (
  <StyledList>
    <StyledItem>
      <GoodDay />
    </StyledItem>
    <StyledItem>
      <GoodDay />
    </StyledItem>
    <StyledItem>
      <GoodDay />
    </StyledItem>
    <StyledItem>
      <GoodDay />
    </StyledItem>
    <StyledItem>
      <GoodDay />
    </StyledItem>
    <StyledItem>
      <GoodDay />
    </StyledItem>
  </StyledList>
);

export default GoodDays;
