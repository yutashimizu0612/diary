import React from 'react';
import styled from 'styled-components/macro';
import H2Heading from './H2Heading';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledTitleWrapper = styled.div`
  position: absolute;
  top: -20px;
  left: 20px;
`;

const StyledStars = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 3px 4px rgb(0, 0, 0, 0.16);
  padding: 24px 36px 10px;
`;

const StyledStarOutlinedIcon = styled(StarOutlinedIcon)`
  color: #f5e73f;
  font-size: 3em !important;
  margin: 0 3px;
`;

const StyledStarBorderOutlinedIcon = styled(StarBorderOutlinedIcon)`
  color: #dbdaca;
  font-size: 3em !important;
  margin: 0 3px;
`;

const DiaryStar: React.FC = () => (
  <StyledWrapper>
    <StyledTitleWrapper>
      <H2Heading text="評価" color="#ff7800" />
    </StyledTitleWrapper>
    <StyledStars>
      <StyledStarOutlinedIcon />
      <StyledStarOutlinedIcon />
      <StyledStarOutlinedIcon />
      <StyledStarOutlinedIcon />
      <StyledStarBorderOutlinedIcon />
    </StyledStars>
  </StyledWrapper>
);

export default DiaryStar;
