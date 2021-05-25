import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { Accomplishment } from '../../../types';
import H2Heading from '../../components/H2Heading';
import GoodDays from '../../components/GoodDays';
import { useAccomplishment } from '../../../hooks/use-accomplishments';

const StyledWrapper = styled.div`
  margin: 16px 0;
`;

const GoodDaysInThePastMonth: React.FC = () => {
  const today = moment();
  const startDay = today.clone().subtract(1, 'months');
  const { getAccomplishments, getProductiveDays } = useAccomplishment();
  const [productiveDays, setProductiveDays] = useState([]);
  useEffect(() => {
    (async () => {
      // 達成したことの数が多い日を6つ取得
      const data = await getProductiveDays(
        startDay.format('YYYY-MM-DD'),
        today.format('YYYY-MM-DD'),
        'DESC',
        6,
      );
      // 日付のみを含む配列に変換：['2021-05-26', '2021-04-22'....]
      const dates = data.map((element: { date: string; count: number }) => element.date);
      // 該当日の達成タスクを取得
      const accomplishments = await getAccomplishments(dates);
      // datesにcontentsプロパティを追加
      const productiveDays = data.map(
        (date: { date: string; count: number; contents: string[] }) => {
          const contents: string[] = [];
          accomplishments.forEach((accomplishment: Accomplishment) => {
            if (date.date === accomplishment.date) {
              contents.push(accomplishment.content);
            }
          });
          date['contents'] = contents;
          return date;
        },
      );
      setProductiveDays(productiveDays);
    })();
  }, []);
  return (
    <>
      <H2Heading text="今月の良かった日" color="#2cd671" />
      <StyledWrapper>
        <GoodDays productiveDays={productiveDays} />
      </StyledWrapper>
    </>
  );
};

export default GoodDaysInThePastMonth;
