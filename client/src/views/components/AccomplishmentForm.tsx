import React from 'react';
import styled from 'styled-components/macro';
import { AccomplishmentFormValues } from '../../types';
import AddIcon from '@material-ui/icons/Add';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 795px;
`;

const StyledTextForm = styled.input`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #d0caca;
  font-size: 18px;
  outline: none;
  padding: 18px 0 16px 16px;
  transition: 0.2s;
  width: 100%;
  /* TODO：focusの時のスタイル（Material UI？） */
  &:hover {
    opacity: 0.7;
  }
  &::placeholder {
    color: #9e9e9e;
    font-weight: 300;
  }
`;

const StyledButton = styled.button`
  background: #2cd671;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  width: 36px;
  height: 36px;
`;

type Props = {
  values: AccomplishmentFormValues;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const AccomplishmentForm: React.FC<Props> = ({ values, onChange, onSubmit }) => {
  return (
    <StyledForm>
      <StyledButton onClick={onSubmit}>
        <AddIcon fontSize="large" css="margin-top: 1px" />
      </StyledButton>
      <StyledTextForm
        name="content"
        placeholder="今日達成したことを入力"
        value={values.content}
        onChange={onChange}
      />
    </StyledForm>
  );
};

export default AccomplishmentForm;
