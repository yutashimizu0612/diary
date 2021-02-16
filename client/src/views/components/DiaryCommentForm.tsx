import React from 'react';
import styled from 'styled-components/macro';

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

// type Props = {};

const DiaryCommentForm: React.FC = () => <StyledForm />;

export default DiaryCommentForm;
