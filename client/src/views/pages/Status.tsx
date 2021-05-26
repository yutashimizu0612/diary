import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import ContributionContainer from '../containers/status/ContributionContainer';
import ProductiveDaysInThePastMonth from '../containers/status/ProductiveDaysInThePastMonth';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 465px;
`;

const Status: React.FC = () => (
  <Layout>
    <ContributionContainer />
    <StyledWrapper>
      <ProductiveDaysInThePastMonth />
    </StyledWrapper>
  </Layout>
);

export default Status;
