import React from 'react';
import styled from 'styled-components/macro';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const StyledWrapper = styled.div`
  background: #fff;
  border-left: 8px solid #2cd671;
  border-bottom: 2px solid #eae7e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px 12px 20px;
  &:not(:first-child) {
    margin-top: 4px;
  }
`;

const StyledText = styled.span`
  font-size: 18px;
  font-weight: 300;
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
  &:hover {
    opacity: 0.7;
  }
`;

type Props = {
  key: string;
  id: string;
  text: string;
  published: boolean;
  onDelete: (id: string) => void;
};

const AccomplishmentItem: React.FC<Props> = ({ id, text, published, onDelete }) => (
  <StyledWrapper>
    <StyledText>{text}</StyledText>
    <StyledOperation>
      <StyledButton isPublished={published}>{published ? '公開' : '非公開'}</StyledButton>
      <StyledIconButton css="margin: 0 12px;">
        <EditIcon />
      </StyledIconButton>
      <StyledIconButton onClick={() => onDelete(id)}>
        <DeleteIcon />
      </StyledIconButton>
    </StyledOperation>
  </StyledWrapper>
);

export default AccomplishmentItem;
