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

const Day: React.FC = () => {
  const [targetDate, setTargetDate] = useState<moment.Moment | null>(moment());
  const prev = () => {
    setTargetDate((date) => date!.subtract(1, 'd'));
    console.log('prevボタン押下しました', targetDate!.format('YYYY-MM-DD'));
  };
  const next = () => {
    setTargetDate((date) => date!.add(1, 'd'));
    console.log('nextボタン押下しました', targetDate!.format('YYYY-MM-DD'));
  };
  const backToToday = () => {
    console.log('todayボタン押下しました');
    setTargetDate(moment());
  };
  const handleDateChange = (date: moment.Moment | null) => {
    console.log('カレンダーで日付を変更しました');
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
