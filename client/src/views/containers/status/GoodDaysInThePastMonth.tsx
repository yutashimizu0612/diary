import React from 'react';
import styled from 'styled-components/macro';
import H2Heading from '../../components/H2Heading';
import GoodDays from '../../components/GoodDays';

const StyledWrapper = styled.div`
  margin: 16px 0;
`;

const GoodDaysInThePastMonth: React.FC = () => {
  return (
    <>
      <H2Heading text="今月の良かった日" color="#2cd671" />
      <StyledWrapper>
        <GoodDays />
      </StyledWrapper>
    </>
  );
};

export default GoodDaysInThePastMonth;
