import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Basket } from '../../../img/basket-icon.svg'
import { ReactComponent as Heart } from '../../../img/icon-heart.svg'
import { ReactComponent as Search } from '../../../img/icon-search.svg'
import { ReactComponent as Logo } from '../../../img/logo.svg'

type StyledPageListWrappProps = {
  active: boolean
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledPageListWrapp = styled.div<StyledPageListWrappProps>`
  @media ${(props) => props.theme.media.tablet} {
    display: block;

    position: absolute;
    left: ${(props) => (props.active ? `0` : '-100%')};
    top: 0;
    width: 50%;

    transition: ${(props) => props.theme.other.time};
    z-index: 999;

    div {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      width: 50px;
      height: 50px;

      &:before,
      :after {
        content: '';
        width: 100%;
        height: 2px;
        background: ${(props) => props.theme.colors.gray};
      }
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }
`

const StyledPageList = styled.ul`
  display: flex;

  li {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
    &:hover {
      a {
        color: ${(props) => props.theme.colors.brown};
        transition: ${(props) => props.theme.other.time};
      }
    }

    a {
      transition: ${(props) => props.theme.other.time};
      text-transform: uppercase;
    }
  }

  @media ${(props) => props.theme.media.tablet} {
    flex-direction: column;
    width: 100%;
    padding: 20px;

    background: #fff;

    li {
      margin-right: 0;
      margin-bottom: 10px;
      padding: 40px 0;

      border-bottom: 1px solid ${(props) => props.theme.colors.gray};

      &:last-child {
        margin-bottom: 0px;
        border-bottom: none;
      }
    }
  }
`

const StyledHamburger = styled.div`
  position: relative;
  display: none;
  width: 40px;
  height: 20px;
  cursor: pointer;

  &:before,
  &:after,
  div {
    content: '';
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.colors.black};
  }

  @media ${(props) => props.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

const StyledLogo = styled(Logo)`
  width: 154px;
  height: 47px;
  margin-left: -160px;
  cursor: pointer;

  @media ${(props) => props.theme.media.tablet} {
    margin-left: 0px;
  }
  @media ${(props) => props.theme.media.mobileSmall} {
    width: 125px;
    height: 38px;
  }
  @media ${(props) => props.theme.media.mobileExtraSmall} {
    display: none;
  }
`

const StyledIconList = styled.ul`
  display: flex;

  li {
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }

    svg {
      cursor: pointer;
      color: ${(props) => props.theme.colors.black};

      path {
        transition: ${(props) => props.theme.other.time};
      }

      &:hover path {
        color: ${(props) => props.theme.colors.brown};
        transition: ${(props) => props.theme.other.time};
      }
    }

    @media ${(props) => props.theme.media.mobileSmall} {
      margin-right: 12px;
    }
  }
`

const Nav: React.FC = () => {
  const [active, setActive] = React.useState(false)

  return (
    <StyledNav>
      <StyledPageListWrapp active={active}>
        <div onClick={() => setActive(false)}></div>
        <StyledPageList>
          <li>
            <a href='##'>Каталог</a>
          </li>
          <li>
            <a href='##'>Контакты</a>
          </li>
          <li>
            <a href='##'>Доставка</a>
          </li>
        </StyledPageList>
      </StyledPageListWrapp>
      <StyledHamburger onClick={() => setActive(!active)}>
        <div></div>
      </StyledHamburger>
      <StyledLogo />
      <StyledIconList>
        <li>
          <Search />
        </li>
        <li>
          <Heart />
        </li>
        <li>
          <Basket />
        </li>
      </StyledIconList>
    </StyledNav>
  )
}

export default Nav
