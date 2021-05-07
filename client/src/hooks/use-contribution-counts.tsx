import { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { Count } from '../types';
import { useAccomplishment } from './use-accomplishments';

const useContributionCounts = () => {
  // 終点：次の日曜日
  const lastDay = moment().endOf('isoWeek');
  const startDay = lastDay.clone().subtract(53, 'weeks');
  console.log('lastDay', lastDay);
  console.log('startDay', startDay);

  const [counts, setCounts] = useState<Count[][]>([]);
  const { getAccomplishmentsCounts } = useAccomplishment();
  useEffect(() => {
    // TODO ：リファクタ：別ファイルに切り出ししたい
    (async () => {
      console.log('useEffect at use-contribution-counts');
      const counts = await getAccomplishmentsCounts(
        startDay.format('YYYY-MM-DD'),
        lastDay.format('YYYY-MM-DD'),
      );
      const template = [...Array(53)].map((element, index, array) => {
        const startDay = lastDay.clone().subtract(array.length - index, 'weeks');
        const week = [...Array(7)].map((day) => {
          return (day = {
            date: startDay.add(1, 'days').format('YYYY-MM-DD'),
            count: 0,
          });
        });
        return week;
      });
      const result = template.map((week) => {
        const newWeek = week.map((day) => {
          const target = counts.find((count: Count) => count.date === day.date);
          return target ? target : day;
        });
        return newWeek;
      });
      setCounts(result);
    })();
  }, []);

  return {
    counts,
  };
};

export default useContributionCounts;
