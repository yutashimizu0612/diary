import React from 'react';
import styled from 'styled-components/macro';

const StyledForm = styled.input`
  background: #fff;
  border-radius: 24px;
  border: none;
  box-shadow: 0 3px 4px rgb(0, 0, 0, 0.16);
  cursor: pointer;
  font-size: 18px;
  outline: none;
  padding: 16px 0 16px 86px;
  position: relative;
  transition: 0.2s;
  width: 100%;
  &:hover {
    opacity: 0.7;
  }
  ::placeholder {
    color: #acacac;
    font-size: 16px;
  }
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
  max-height: 35px;
  z-index: 1;
`;

type Props = {
  placeholder: string;
  iconType: any;
};

const TextForm: React.FC<Props> = ({ placeholder, iconType }) => {
  const Icon = iconType;
  return (
    <div
      css={`
        position: relative;
      `}>
      <StyledWrapper>
        <Icon fontSize="large" />
      </StyledWrapper>
      <StyledForm placeholder={placeholder} />
    </div>
  );
};

export default TextForm;
