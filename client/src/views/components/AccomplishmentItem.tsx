import React, { useState } from 'react';
import styled from 'styled-components/macro';
import DeleteIcon from '@material-ui/icons/Delete';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Accomplishment, AccomplishmentFormValues } from '../../types';

const StyledWrapper = styled.div`
  background: #fff;
  border-left: 8px solid #2cd671;
  border-bottom: 2px solid #eae7e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 20px 6px 16px;
  &:not(:first-child) {
    margin-top: 4px;
  }
`;

const StyledContent = styled.div`
  flex: 1;
  margin-right: 16px;
`;

const StyledText = styled.p`
  cursor: pointer;
  font-size: 18px;
  font-weight: 300;
  margin: 1px;
  padding: 5px 0 5px 8px;
  &:hover {
    border: 1px solid #d0caca;
    border-radius: 4px;
    margin: 0;
  }
`;

const StyledForm = styled.form``;

const StyledTextForm = styled.input`
  border: 1px solid #d0caca;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 300;
  padding: 8px 0 8px 8px;
  width: 100%;
`;

const StyledOperation = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button<{ isPublished: boolean }>`
  background: ${(props) => (props.isPublished ? '#2cd671' : '#c1c1c1')};
  color: #fff;
  font-size: 12px;
  padding: 3px 0;
  width: 50px;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledIconButton = styled.button`
  background: #fff;
  color: #353535;
  cursor: pointer;
  transition: 0.2s;
  margin-left: 12px;
  &:hover {
    opacity: 0.7;
  }
`;

type Props = {
  key: string;
  accomplishment: Accomplishment;
  onUpdate: (id: string, content: string, published: boolean) => void;
  onDelete: (id: string) => void;
};

const AccomplishmentItem: React.FC<Props> = ({ accomplishment, onUpdate, onDelete }) => {
  const { id, content, published } = accomplishment;
  const [values, setValues] = useState<AccomplishmentFormValues>({ content, published });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log('values', values);
  };

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onUpdate(id, values.content, values.published);
  };

  const [isEditing, setIsEditing] = useState(false);
  const edit = () => {
    setIsEditing(true);
  };

  const quitEditing = () => {
    setIsEditing(false);
  };

  return (
    <StyledWrapper>
      <ClickAwayListener onClickAway={quitEditing}>
        <StyledContent>
          {isEditing ? (
            <StyledForm onSubmit={handleUpdate}>
              <StyledTextForm
                name="content"
                value={values.content}
                onChange={(e) => handleChange(e)}
              />
            </StyledForm>
          ) : (
            <StyledText onClick={() => edit()}>{values.content}</StyledText>
          )}
        </StyledContent>
      </ClickAwayListener>
      <StyledOperation>
        <StyledButton isPublished={values.published}>
          {values.published ? '公開' : '非公開'}
        </StyledButton>
        <StyledIconButton onClick={() => onDelete(id)}>
          <DeleteIcon />
        </StyledIconButton>
      </StyledOperation>
    </StyledWrapper>
  );
};

export default AccomplishmentItem;
