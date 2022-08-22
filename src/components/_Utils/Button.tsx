import React from 'react'
import styled from 'styled-components'

type StyledProps = {
  uppercase: boolean
  marginTop: string
  variant: string | undefined
}

const StyledButton = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 19px 22px;
  margin-top: ${(props) => props.marginTop};

  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  color: ${(props) =>
    props.variant === 'white'
      ? props.theme.colors.white
      : props.variant === 'black'
      ? props.theme.colors.black
      : ''};

  background: none;
  border: 1px solid
    ${(props) =>
      props.variant === 'white'
        ? props.theme.colors.white
        : props.variant === 'black'
        ? props.theme.colors.black
        : ''};
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
`

interface BtnProps {
  btnText: string
  uppercase: boolean
  marginTop: string
  variant: string
}

const Button: React.FC<BtnProps> = ({ btnText, uppercase, marginTop, variant }) => {
  return (
    <>
      <StyledButton uppercase={uppercase} marginTop={marginTop} variant={variant}>
        {btnText}
      </StyledButton>
    </>
  )
}

export default Button
