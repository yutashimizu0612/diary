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
    name?: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onBackButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const UpdateAccountForm: React.FC<Props> = ({
  values,
  errors,
  onChange,
  onSubmit,
  onBackButton,
}) => {
  return (
    <>
      <TextField
        label="名前"
        value={values.name}
        error={Object.keys(errors).length !== 0}
        helperText={errors.name}
        onChange={onChange}
        variant="outlined"
        fullWidth
      />
      <StyledWrapper>
        <Button variant="contained" onClick={onBackButton}>
          戻る
        </Button>
        <StyledButton variant="contained" onClick={onSubmit}>
          保存する
        </StyledButton>
      </StyledWrapper>
    </>
  );
};

export default UpdateAccountForm;
