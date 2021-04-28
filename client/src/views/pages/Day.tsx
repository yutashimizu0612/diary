import React, { useState } from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import Layout from '../layouts/Layout';
import Accomplishment from '../containers/diary/Accomplishment';
import PostContainer from '../containers/diary/PostContainer';
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
  const today = moment();
  const [targetDate, setTargetDate] = useState<moment.Moment | null>(today);
  const prev = () => {
    setTargetDate(targetDate!.subtract(1, 'd'));
  };
  const next = () => {
    setTargetDate(targetDate!.add(1, 'd'));
  };
  const backToToday = () => {
    setTargetDate(today);
  };
  const handleDateChange = (date: moment.Moment | null) => {
    setTargetDate(date);
  };
  return (
    <Layout>
      <Contribution />
      <StyledWrapper>
        <DiaryDate
          date={targetDate}
          prev={prev}
          next={next}
          backToToday={backToToday}
          handleDateChange={handleDateChange}
        />
        <div css="margin-top: 45px;">
          <Accomplishment date={targetDate} />
        </div>
        <div css="margin-top: 60px;">
          <PostContainer date={targetDate} />
        </div>
        <div css="margin-top: 75px;">
          <DiaryPagination date={targetDate} prev={prev} next={next} />
        </div>
      </StyledWrapper>
    </Layout>
  );
};

export default Day;
