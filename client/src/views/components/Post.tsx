import React from 'react';
import styled from 'styled-components/macro';
import SeeMore from './SeeMore';
import PerformanceIcon from './PerformanceIcon';

const StyledPost = styled.div`
  background: #fff;
  border: 1px solid #d0caca;
  border-radius: 8px;
  font-weight: 300;
  padding: 20px 30px 16px;
`;

const StyledTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledUser = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 56px;
  height: 56px;
`;

const StyledName = styled.span`
  display: block;
  font-weight: normal;
`;

const StyledDate = styled.span`
  color: #707070;
  font-size: 15px;
`;

const StyledList = styled.ul`
  margin: 20px 0 0 24px;
`;

const StyledItem = styled.li`
  font-size: 15px;
  margin-left: 1em;
  text-indent: -1em;
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

const StyledSeeMore = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const Post: React.FC = () => (
  <StyledPost>
    <StyledTop>
      <StyledUser>
        <StyledImage src="https://placehold.jp/150x150.png" />
        <div css="margin-left: 30px;">
          <StyledName>ユーザ名</StyledName>
          <StyledDate>2020/12/31</StyledDate>
        </div>
      </StyledUser>
      <PerformanceIcon />
    </StyledTop>
    <StyledList>
      <StyledItem>・5km走れた</StyledItem>
      <StyledItem>
        ・ポートフォリオ作成のためのワイヤー作業に着手できたポートフォリオ作成のためのワイヤー作業に着手できた
      </StyledItem>
      <StyledItem>・朝散歩に行けた</StyledItem>
    </StyledList>
    <StyledSeeMore>
      <SeeMore />
    </StyledSeeMore>
  </StyledPost>
);

export default Post;
