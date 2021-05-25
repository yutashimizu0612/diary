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
  const { getAccomplishments, getProductiveDates } = useAccomplishment();
  const [productiveDates, setProductiveDates] = useState([]);
  useEffect(() => {
    (async () => {
      // 達成したことの数が多い日を6つ取得
      const dates = await getProductiveDates(
        startDay.format('YYYY-MM-DD'),
        today.format('YYYY-MM-DD'),
        'DESC',
        6,
      );
      console.log('dates', dates);
      // 日付のみを含む配列に変換
      const datesArray = dates.map((element: { date: string; count: number }) => element.date);
      // 該当日の達成タスクを取得
      const accomplishments = await getAccomplishments(datesArray);
      console.log('accomplishments', accomplishments);
      // datesにcontentsプロパティを追加
      const productiveDates = dates.map(
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
      console.log('productiveDates', productiveDates);
      setProductiveDates(productiveDates);
    })();
  }, []);
  return (
    <>
      <H2Heading text="今月の良かった日" color="#2cd671" />
      <StyledWrapper>
        <GoodDays productiveDates={productiveDates} />
      </StyledWrapper>
    </>
  );
};

export default GoodDaysInThePastMonth;
