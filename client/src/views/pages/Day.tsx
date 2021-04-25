import React, { useState } from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import Layout from '../layouts/Layout';
import Accomplishment from '../containers/diary/Accomplishment';
import Post from '../containers/diary/Post';
import Contribution from '../components/Contribution';
import DiaryDate from '../components/DiaryDate';
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
        <DiaryDate date={targetDate} prev={prev} next={next} backToToday={backToToday} />
        <div css="margin-top: 45px;">
          <Accomplishment date={targetDate} />
        </div>
        <div css="margin-top: 60px;">
          <Post date={targetDate} />
        </div>
        <div css="margin-top: 75px;">
          <DiaryPagination date={targetDate} prev={prev} next={next} />
        </div>
      </StyledWrapper>
    </Layout>
  );
};

export default Day;
