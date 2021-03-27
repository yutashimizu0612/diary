import React from 'react';
import styled from 'styled-components/macro';
import Header from '../components/header/Header';
import Contribution from '../components/Contribution';
import DiaryDate from '../components/DiaryDate';
import DiaryAccomplishment from '../components/DiaryAccomplishment';
import DiaryComment from '../components/DiaryComment';
import DiaryStar from '../components/DiaryStar';
import DiaryPagination from '../components/DiaryPagination';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 950px;
`;

const Day: React.FC = () => (
  <>
    <Header />
    <Contribution />
    <StyledWrapper>
      <DiaryDate />
      <div css="margin-top: 45px;">
        <DiaryAccomplishment />
      </div>
      <div css="margin-top: 60px;">
        <DiaryComment />
      </div>
      <div
        css={`
          margin-top: 60px;
          text-align: right;
        `}>
        <DiaryStar />
      </div>
      <div css="margin-top: 75px;">
        <DiaryPagination />
      </div>
    </StyledWrapper>
  </>
);

export default Day;
