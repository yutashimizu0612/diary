import React from 'react';
import styled from 'styled-components/macro';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import H2Heading from './H2Heading';

const StyledForm = styled.form`
  margin: 16px 0;
`;

const StyledTextArea = styled.textarea`
  background: #fff;
  border-radius: 8px;
  border: none;
  box-shadow: 0 3px 4px rgb(0, 0, 0, 0.16);
  color: #3e3e3e;
  font-size: 18px;
  outline: none;
  padding: 20px;
  resize: vertical;
  height: 200px;
  width: 100%;
`;

const StyledButtonWrapper = styled.div`
  text-align: right;
`;

const StyledButton = styled(Button)<{ success?: boolean }>`
  background: ${(props) => (props.success ? '#f8548c' : '#fff')};
  border: 1px solid #f8548c;
  color: ${(props) => (props.success ? '#fff' : '#f8548c')};
  &:hover {
    background: #f8548c;
    color: #fff;
  }
`;

type Props = {
  success: boolean;
  canSubmit: boolean;
  comment: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClickAway: () => void;
};

const DiaryComment: React.FC<Props> = ({
  success,
  canSubmit,
  comment,
  onChange,
  onSubmit,
  onClickAway,
}) => (
  <>
    <H2Heading text="コメント" color="#f8548c" />
    <StyledForm onSubmit={onSubmit}>
      <StyledTextArea name="comment" value={comment} onChange={onChange} />
      <StyledButtonWrapper>
        <ClickAwayListener onClickAway={onClickAway}>
          {success ? (
            <StyledButton success variant="contained">
              保存しました
            </StyledButton>
          ) : (
            <StyledButton type="submit" variant="outlined" disabled={!canSubmit}>
              保存する
            </StyledButton>
          )}
        </ClickAwayListener>
      </StyledButtonWrapper>
    </StyledForm>
  </>
);

export default DiaryComment;
