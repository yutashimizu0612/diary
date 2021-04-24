import React, { useState } from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import Layout from '../layouts/Layout';
import Accomplishment from '../containers/diary/Accomplishment';
import Contribution from '../components/Contribution';
import DiaryDate from '../components/DiaryDate';
import DiaryComment from '../components/DiaryComment';
import DiaryStar from '../components/DiaryStar';
import DiaryPagination from '../components/DiaryPagination';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 900px;
`;

// Postsの取得

// コントリビューションの取得

const Day: React.FC = () => {
  const today = moment().format('YYYY-MM-DD');
  const [targetDate, setTargetDate] = useState(today);
  const prev = () => {
    setTargetDate(moment(targetDate).subtract(1, 'd').format('YYYY-MM-DD'));
  };
  const next = () => {
    setTargetDate(moment(targetDate).add(1, 'd').format('YYYY-MM-DD'));
  };
  const backToToday = () => {
    setTargetDate(today);
  };
  return (
    <Layout>
      <Contribution />
      <StyledWrapper>
        <DiaryDate prev={prev} next={next} backToToday={backToToday} />
        <div css="margin-top: 45px;">
          <Accomplishment date={targetDate} />
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
          <DiaryPagination prev={prev} next={next} />
        </div>
      </StyledWrapper>
    </Layout>
  );
};

export default Day;
