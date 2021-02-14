import React from 'react';
import styled from 'styled-components/macro';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledWrapper = styled.button`
  background: #2cd671;
  border-radius: 16px;
  display: inline-block;
  line-height: 1;
  padding: 6px 10px 7px 24px;
  position: relative;
  &:hover {
    opacity: 0.7;
  }
`;

const IconWrapper = styled.div`
  color: #fff;
  position: absolute;
  top: 3px;
  left: 4px;
`;

const StyledText = styled.span`
  color: #fff;
  font-size: 11px;
  font-weight: bold;
`;

const SeeMore: React.FC = () => (
  <StyledWrapper>
    <IconWrapper>
      <ExpandMoreIcon fontSize="small" />
    </IconWrapper>
    <StyledText>SEE MORE</StyledText>
  </StyledWrapper>
);

export default SeeMore;
