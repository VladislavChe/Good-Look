import styled from 'styled-components';
import { ReactComponent as Basket } from '../img/basket-icon.svg';
import { ReactComponent as Heart } from '../img/icon-heart.svg';
import { ReactComponent as Search } from '../img/icon-search.svg';
import { ReactComponent as User } from '../img/icon-user.svg';
import { ReactComponent as Logo } from '../img/logo.svg';

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageList = styled.ul`
  display: flex;

  li {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
    &:hover {
      a {
        color: ${(props: any) => props.theme.colors.brown};
        transition: ${(props: any) => props.theme.other.time};
      }
    }

    a {
      transition: ${(props: any) => props.theme.other.time};
      text-transform: uppercase;
    }
  }
`;

const IconList = styled.ul`
  display: flex;

  li {
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }

    svg {
      cursor: pointer;

      path {
        stroke: ${(props: any) => props.theme.colors.black};
        transition: ${(props: any) => props.theme.other.time};
      }

      &:hover path {
        stroke: ${(props: any) => props.theme.colors.brown};
        transition: ${(props: any) => props.theme.other.time};
      }
    }
  }
`;

const Nav = (props: any) => {
  return (
    <NavStyled>
      <PageList>
        <li>
          <a href="##">Каталог</a>
        </li>
        <li>
          <a href="##">Контакты</a>
        </li>
        <li>
          <a href="##">Доставка</a>
        </li>
      </PageList>
      <Logo />
      <IconList>
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
      </IconList>
    </NavStyled>
  );
};

export default Nav;
