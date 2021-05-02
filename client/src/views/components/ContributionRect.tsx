import React from 'react';
import styled from 'styled-components/macro';
import { Count } from '../../types';
import { lighten } from '@material-ui/core';

const StyledRect = styled.rect<{ level: number }>`
  fill: ${(props) => (props.level === 0 ? '#e8e2e2' : lighten('#3ea171', 1 - props.level * 0.2))};
`;

type Props = {
  day: Count;
  index: number;
};

const ContributionRect: React.FC<Props> = ({ day, index }) => {
  if (day.count !== 0) {
    console.log('count', day.count);
    console.log(day.count > 10 ? 5 : Math.ceil(day.count / 2));
  }
  return (
    <StyledRect
      width="16"
      height="16"
      x="0"
      y={index * 18}
      level={day.count > 10 ? 5 : Math.ceil(day.count / 2)}
      data-date={day.date}
      data-count={day.count}></StyledRect>
  );
};

export default ContributionRect;
