import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import GoodDays from '../components/GoodDays';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 950px;
`;

const Status: React.FC = () => (
  <Layout>
    <StyledWrapper>
      <GoodDays />
    </StyledWrapper>
  </Layout>
);

export default Status;
