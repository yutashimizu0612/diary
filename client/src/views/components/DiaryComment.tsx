import React from 'react';
import styled from 'styled-components/macro';
import H2Heading from './H2Heading';

const StyledForm = styled.form`
  margin: 16px 0;
`;

const StyledTextArea = styled.textarea`
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

const StyledButton = styled.button``;

type Props = {
  comment: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const DiaryComment: React.FC<Props> = ({ comment, onChange, onSubmit }) => (
  <>
    <H2Heading text="コメント" color="#f8548c" />
    <StyledForm onSubmit={onSubmit}>
      <StyledTextArea name="comment" value={comment} onChange={onChange} />
      <StyledButton type="submit">仮のsubmitボタン</StyledButton>
    </StyledForm>
  </>
);

export default DiaryComment;
