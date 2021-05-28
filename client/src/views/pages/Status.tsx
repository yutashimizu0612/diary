import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import H2Heading from '../components/H2Heading';
import ContributionContainer from '../containers/status/ContributionContainer';
import ProductiveDaysContainer from '../containers/status/ProductiveDaysContainer';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 60px auto 0;
`;

const StyledItem = styled.li`
  width: 465px;
  &:nth-of-type(odd) {
    margin-right: 20px;
  }
`;

const Status: React.FC = () => (
  <Layout>
    <ContributionContainer />
    <StyledList>
      <StyledItem>
        <H2Heading text="今月の良かった日" color="#2cd671" />
        <ProductiveDaysContainer unit="months" />
      </StyledItem>
      <StyledItem>
        <H2Heading text="今年の良かった日" color="#2cd671" />
        <ProductiveDaysContainer unit="years" />
      </StyledItem>
    </StyledList>
  </Layout>
);

export default Status;
