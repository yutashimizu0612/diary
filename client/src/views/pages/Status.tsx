import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import ContributionContainer from '../containers/status/ContributionContainer';
import GoodDaysInThePastMonth from '../containers/status/GoodDaysInThePastMonth';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 950px;
`;

const Status: React.FC = () => (
  <Layout>
    <ContributionContainer />
    <StyledWrapper>
      <GoodDaysInThePastMonth />
    </StyledWrapper>
  </Layout>
);

export default Status;
