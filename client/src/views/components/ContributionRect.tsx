import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Count } from '../../types';
import { lighten } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const StyledRect = styled.rect<{ level: number }>`
  fill: ${(props) => (props.level === 0 ? '#e8e2e2' : lighten('#3ea171', 1 - props.level * 0.2))};
`;

const StyledAccomplishment = styled.span`
  display: block;
  text-align: center;
`;

const StyledCount = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 0 6px;
`;

const StyledDate = styled.span`
  color: #c6c6c6;
  display: block;
  font-size: 12px;
  text-align: center;
`;

type Props = {
  day: Count;
  index: number;
};

const ContributionRect: React.FC<Props> = ({ day, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const title = (
    <>
      {day.count !== 0 && (
        <StyledAccomplishment>
          <StyledCount>{day.count}</StyledCount>つ達成しました！
        </StyledAccomplishment>
      )}
      <StyledDate>{day.date}</StyledDate>
    </>
  );
  return (
    <>
      <Tooltip
        open={isOpen}
        title={title}
        arrow
        placement="top"
        onClose={handleClose}
        onOpen={handleOpen}>
        <StyledRect
          width="16"
          height="16"
          x="0"
          y={index * 18}
          level={day.count > 10 ? 5 : Math.ceil(day.count / 2)}
          data-date={day.date}
          data-count={day.count}></StyledRect>
      </Tooltip>
    </>
  );
};

export default ContributionRect;
