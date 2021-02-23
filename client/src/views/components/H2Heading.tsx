import React from 'react';
import styled from 'styled-components/macro';

const StyledHeading = styled.h2<{ color: string }>`
  background: ${(props) => props.color};
  border-radius: 8px;
  display: inline-block;
  font-size: 18px;
  font-weight: normal;
  padding: 7px 24px;
`;

const StyledText = styled.span`
  color: #fff;
`;

type Props = {
  text: string;
  color: string;
};

const H2Heading: React.FC<Props> = ({ text, color }) => (
  <StyledHeading color={color}>
    <StyledText>{text}</StyledText>
  </StyledHeading>
);

export default H2Heading;
