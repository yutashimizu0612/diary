import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { Accomplishment, productiveDay } from '../../../types';
import H2Heading from '../../components/H2Heading';
import ProductiveDays from '../../components/ProductiveDays';
import { useAccomplishment } from '../../../hooks/use-accomplishments';

const StyledWrapper = styled.div`
  margin: 16px 0;
`;

const ProductiveDaysInThePastMonth: React.FC = () => {
  const today = moment();
  const startDay = today.clone().subtract(1, 'months');
  const { getAccomplishments, getProductiveDays } = useAccomplishment();
  const [productiveDays, setProductiveDays] = useState<productiveDay[]>([]);
  useEffect(() => {
    (async () => {
      // 1. 達成したことの数が多い日を6つ取得
      const data = await getProductiveDays(
        startDay.format('YYYY-MM-DD'),
        today.format('YYYY-MM-DD'),
        'DESC',
        6,
      );
      // 2. 取得したdataを日付のみを含む配列に変換：['2021-05-26', '2021-04-22'....]
      const dates = data.map((element: { date: string; count: number }) => element.date);
      // 3. 2を元に該当日の達成タスクを取得
      const accomplishments: Accomplishment[] = await getAccomplishments(dates);
      // 4. 元dataにcontentsプロパティを追加（日付が一致する達成タスクをcontents配列に格納）
      const productiveDays: productiveDay[] = data.map((date: productiveDay) => {
        const contents: string[] = [];
        accomplishments.forEach((accomplishment: Accomplishment) => {
          if (date.date === accomplishment.date) {
            contents.push(accomplishment.content);
          }
        });
        date['contents'] = contents;
        return date;
      });
      setProductiveDays(productiveDays);
    })();
  }, []);
  return (
    <>
      <H2Heading text="今月の良かった日" color="#2cd671" />
      <StyledWrapper>
        <ProductiveDays productiveDays={productiveDays} />
      </StyledWrapper>
    </>
  );
};

export default ProductiveDaysInThePastMonth;
