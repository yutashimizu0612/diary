import React from 'react';
import styled from 'styled-components/macro';
import H2Heading from './H2Heading';

const StyledForm = styled.textarea`
  background: #fff;
  border-radius: 8px;
  border: none;
  box-shadow: 0 3px 4px rgb(0, 0, 0, 0.16);
  cursor: pointer;
  color: #3e3e3e;
  font-size: 18px;
  outline: none;
  padding: 20px;
  height: 350px;
  width: 100%;
`;

// コメントの取得
// コメントの新規作成
// コメントの更新

const DiaryComment: React.FC = () => (
  <>
    <H2Heading text="コメント" color="#f8548c" />
    <div css="margin: 16px 0;">
      <StyledForm />
    </div>
  </>
);

export default DiaryComment;
