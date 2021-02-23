import React from 'react';
import styled from 'styled-components/macro';
import AddIcon from '@material-ui/icons/Add';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 795px;
`;

const StyledForm = styled.input`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #d0caca;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  padding: 18px 0 16px 16px;
  transition: 0.2s;
  width: 100%;
  &:hover {
    opacity: 0.7;
  }
  &::placeholder {
    color: #9e9e9e;
    font-weight: 300;
  }
`;

const StyledIconWrapper = styled.div`
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

const AccomplishmentForm: React.FC = () => (
  <StyledWrapper>
    <StyledIconWrapper>
      <AddIcon fontSize="large" css="margin-top: 1px" />
    </StyledIconWrapper>
    <StyledForm placeholder="今日達成したことを入力" />
  </StyledWrapper>
);

export default AccomplishmentForm;
