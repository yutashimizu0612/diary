import React from 'react';
import styled from 'styled-components/macro';
import Header from '../components/Header';
import DiaryDate from '../components/DiaryDate';
import DiaryAccomplishment from '../components/DiaryAccomplishment';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 950px;
`;

const Day: React.FC = () => (
  <>
    <Header />
    <StyledWrapper>
      <DiaryDate />
      <DiaryAccomplishment />
    </StyledWrapper>
  </>
);

export default Day;
