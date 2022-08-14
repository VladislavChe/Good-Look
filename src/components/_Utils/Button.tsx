import React from 'react';
import styled from 'styled-components';

type StyledProps = {
  uppercase: boolean;
  marginTop: string;
};

const StyledButton = styled.button<StyledProps>`
  padding: 19px 22px;
  margin-top: ${(props) => props.marginTop};

  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};

  background: none;
  border: 1px solid ${(props) => props.theme.colors.black};
  transition: ${(props) => props.theme.other.time};

  &:hover {
    background: ${(props) => props.theme.colors.brown};
    color: #fff;
    border: 1px solid ${(props) => props.theme.colors.brown};
    transition: ${(props) => props.theme.other.time};
  }

  &:active {
    background: ${(props) => props.theme.colors.browner};
    border: 1px solid ${(props) => props.theme.colors.browner};
  }
`;

interface BtnProps {
  btnText: string;
  uppercase: boolean;
  marginTop: string;
}

const Button: React.FC<BtnProps> = ({ btnText, uppercase, marginTop }) => {
  return (
    <>
      <StyledButton uppercase={uppercase} marginTop={marginTop}>
        {btnText}
      </StyledButton>
    </>
  );
};

export default Button;
