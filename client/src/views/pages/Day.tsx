import React, { useState } from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import Layout from '../layouts/Layout';
import AccomplishmentContainer from '../containers/diary/AccomplishmentContainer';
import PostContainer from '../containers/diary/PostContainer';
import DiaryDate from '../components/DiaryDate';
import DiaryPagination from '../components/DiaryPagination';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 900px;
  min-height: calc(100vh - 122px);
  position: relative;
  padding-bottom: 80px;
`;

const StyledPagination = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
`;

const Day: React.FC = () => {
  const [targetDate, setTargetDate] = useState<moment.Moment | null>(moment());
  const prev = () => {
    const currentDate = targetDate!.clone();
    setTargetDate(currentDate!.subtract(1, 'd'));
  };
  const next = () => {
    const currentDate = targetDate!.clone();
    setTargetDate(currentDate!.add(1, 'd'));
  };
  const backToToday = () => {
    setTargetDate(moment());
  };
  const handleDateChange = (date: moment.Moment | null) => {
    setTargetDate(date);
  };
  return (
    <Layout>
      <StyledWrapper>
        <DiaryDate
          date={targetDate}
          prev={prev}
          next={next}
          backToToday={backToToday}
          handleDateChange={handleDateChange}
        />
        <div css="margin-top: 45px;">
          <PostContainer date={targetDate} />
        </div>
        <div css="margin-top: 30px;">
          <AccomplishmentContainer date={targetDate} />
        </div>
        <StyledPagination>
          <DiaryPagination date={targetDate} prev={prev} next={next} />
        </StyledPagination>
      </StyledWrapper>
    </Layout>
  );
};

export default Day;
