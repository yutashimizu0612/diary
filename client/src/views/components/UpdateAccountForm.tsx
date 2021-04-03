import React from 'react';
import styled from 'styled-components/';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const StyledButton = styled(Button)`
  background-color: #2cd671;
  color: #fff;
  margin-left: 8px;
  &:hover {
    background-color: #7fe5a8;
  }
`;

type Props = {
  values: {
    name: string;
  };
  errors: {
    email?: string;
    password?: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  quitEditing: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const UpdateAccountForm: React.FC<Props> = ({
  values,
  errors,
  onChange,
  onSubmit,
  quitEditing,
}) => {
  return (
    <>
      <TextField
        label="名前"
        value={values.name}
        onChange={onChange}
        variant="outlined"
        fullWidth
      />
      <StyledWrapper>
        <Button variant="contained">戻る</Button>
        <StyledButton variant="contained">保存する</StyledButton>
      </StyledWrapper>
    </>
  );
};

export default UpdateAccountForm;