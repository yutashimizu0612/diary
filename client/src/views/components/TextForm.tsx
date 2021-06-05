import React from 'react';
import styled from 'styled-components/macro';

const StyledInput = styled.input`
  background: #fff;
  border-radius: 24px;
  border: none;
  box-shadow: 0 3px 4px rgb(0, 0, 0, 0.16);
  font-size: 18px;
  outline: none;
  padding: 16px 0 16px 86px;
  position: relative;
  transition: 0.2s;
  width: 100%;
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

const StyledError = styled.span`
  position: absolute;
  left: 32px;
  top: -22px;
  color: #ec3e3e;
  display: block;
  font-size: 14px;
`;

type Props = {
  name: string;
  iconType: any;
  placeholder: string;
  value: string;
  formType: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextForm: React.FC<Props> = ({
  name,
  iconType,
  placeholder,
  value,
  error,
  formType,
  onChange,
}) => {
  const Icon = iconType;
  return (
    <>
      <div
        css={`
          position: relative;
        `}>
        {error && <StyledError>{error}</StyledError>}
        <label>
          <StyledWrapper>
            <Icon fontSize="large" />
          </StyledWrapper>
          <StyledInput
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={formType}
          />
        </label>
      </div>
    </>
  );
};

export default TextForm;
