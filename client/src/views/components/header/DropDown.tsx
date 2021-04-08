import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuth } from '../../../functions/auth/use-auth';

const StyledIconWrapper = styled.div`
  cursor: pointer;
  position: relative;
`;

const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  color: #fff;
  font-size: 3em !important;
`;

const StyledDropDown = styled.div`
  border-radius: 8px;
  position: absolute;
  top: 50px;
  left: 0;
  width: 120px;
`;

const StyledDropDownLink = styled(Link)`
  background: #fff;
  border-radius: 8px 8px 0 0;
  color: #808080;
  display: block;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background: #f5f5f5;
    color: #000;
  }
`;

const StyledDropDownButton = styled.button`
  background: #fff;
  color: #808080;
  display: block;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
  &:hover {
    background: #f5f5f5;
    color: #000;
  }
`;

const DropDown: React.FC = () => {
  const auth = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const history = useHistory();
  return (
    <StyledIconWrapper
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}>
      <StyledAccountCircleIcon />
      {isVisible && (
        <StyledDropDown>
          <StyledDropDownLink to="/settings">アカウント設定</StyledDropDownLink>
          <StyledDropDownButton
            onClick={() => {
              auth.logout(() => {
                history.push('/login');
              });
            }}>
            ログアウト
          </StyledDropDownButton>
          <StyledDropDownButton>退会</StyledDropDownButton>
        </StyledDropDown>
      )}
    </StyledIconWrapper>
  );
};

export default DropDown;
