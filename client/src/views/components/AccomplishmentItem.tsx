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

const StyledButton = styled.button`
  background: #2cd671;
  color: #fff;
  font-size: 12px;
  padding: 3px 0;
  width: 50px;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledIconWrapper = styled.div`
  color: #353535;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;

type Props = {
  id: string;
  text: string;
  published: boolean;
};

const AccomplishmentItem: React.FC<Props> = ({ id, text, published }) => (
  <StyledWrapper key={id}>
    <StyledText>{text}</StyledText>
    <StyledOperation>
      <StyledButton>公開</StyledButton>
      <StyledIconWrapper css="margin: 0 12px;">
        <EditIcon />
      </StyledIconWrapper>
      <StyledIconWrapper>
        <DeleteIcon />
      </StyledIconWrapper>
    </StyledOperation>
  </StyledWrapper>
);

export default AccomplishmentItem;
