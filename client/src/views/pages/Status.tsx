import React from 'react';
import styled from 'styled-components';
import GoodDays from '../components/GoodDays';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 950px;
`;

const Status: React.FC = () => (
  <StyledWrapper>
    <GoodDays />
  </StyledWrapper>
);

export default Status;
