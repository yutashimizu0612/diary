import React from 'react';
import styled from 'styled-components/macro';
import { Count } from '../../types';
import ContributionRect from './ContributionRect';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 952px;
`;

const StyledTitle = styled.p`
  margin-bottom: 12px;
`;

const StyledBody = styled.svg`
  width: 100%;
  height: 124px;
`;

type Props = {
  counts: Count[][];
};

const Contribution: React.FC<Props> = ({ counts }) => {
  console.log('propsのcounts', counts);
  return (
    <StyledWrapper>
      <StyledTitle>160 contribution in the last year</StyledTitle>
      <StyledBody>
        {counts.map((week, index) => (
          <g transform={`translate(${index * 18})`} key={week[0].date}>
            {week.map((day, index) => (
              <ContributionRect day={day} index={index} key={day.date} />
            ))}
          </g>
        ))}
      </StyledBody>
    </StyledWrapper>
  );
};

export default Contribution;
