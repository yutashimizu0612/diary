import React from 'react';
import styled from 'styled-components/macro';
import Header from '../components/Header';
import DiaryDate from '../components/DiaryDate';
import DiaryAccomplishment from '../components/DiaryAccomplishment';
import DiaryComment from '../components/DiaryComment';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 950px;
`;

const Day: React.FC = () => (
  <>
    <Header />
    <StyledWrapper>
      <DiaryDate />
      <div css="margin-top: 45px;">
        <DiaryAccomplishment />
      </div>
      <div css="margin-top: 60px;">
        <DiaryComment />
      </div>
    </StyledWrapper>
  </>
);

export default Day;
