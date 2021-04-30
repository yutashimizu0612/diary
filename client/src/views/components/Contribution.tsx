import React from 'react';
import styled from 'styled-components/macro';
import { Count } from '../../types';

const StyledWrapper = styled.div`
  background: #fff;
  padding: 36px 0 18px;
`;

const StyledInner = styled.div`
  margin: 0 auto;
  width: 900px;
`;

const StyledTitle = styled.p`
  margin-bottom: 12px;
`;

const StyledBody = styled.svg`
  width: 100%;
`;

type Props = {
  counts: Count[];
};

const Contribution: React.FC<Props> = ({ counts }) => {
  console.log('propsのcounts', counts);
  const xPositions = [...Array(52)].map((element, index) => 18 * index);
  const yPositions = [...Array(7)].map((element, index) => 18 * index);
  return (
    <StyledWrapper>
      <StyledInner>
        <StyledTitle>160 contribution in the last year</StyledTitle>
        <StyledBody>
          {xPositions.map((x) => (
            <g transform={`translate(${x})`} key={x}>
              {yPositions.map((y) => (
                <rect width="16" height="16" fill="#e8e2e2" x="0" y={y} key={y}></rect>
              ))}
            </g>
          ))}
        </StyledBody>
      </StyledInner>
    </StyledWrapper>
  );
};

export default Contribution;
