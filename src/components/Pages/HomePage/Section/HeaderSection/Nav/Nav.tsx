import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Basket } from '../../../../../../img/basket-icon.svg'
import { ReactComponent as Heart } from '../../../../../../img/icon-heart.svg'
import { ReactComponent as Search } from '../../../../../../img/icon-search.svg'
import { ReactComponent as User } from '../../../../../../img/icon-user.svg'
import { ReactComponent as Logo } from '../../../../../../img/logo.svg'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`

const StyledLogo = styled(Logo)`
  width: 154px;
  height: 47px;
  margin-left: -160px;
  cursor: pointer;
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
  }
`

const Nav: React.FC = () => {
  return (
    <StyledNav>
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
      <StyledLogo />
      <StyledIconList>
        <li>
          <User />
        </li>
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
