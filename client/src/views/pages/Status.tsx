import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import ContributionContainer from '../containers/status/ContributionContainer';
import ProductiveDaysContainer from '../containers/status/ProductiveDaysContainer';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 465px;
`;

const Status: React.FC = () => (
  <Layout>
    <ContributionContainer />
    <StyledWrapper>
      <ProductiveDaysContainer />
    </StyledWrapper>
  </Layout>
);

export default Status;
