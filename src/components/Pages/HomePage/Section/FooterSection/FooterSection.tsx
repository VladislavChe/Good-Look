import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Inst } from '../../../../../img/inst-icon.svg'
import { ReactComponent as Logo } from '../../../../../img/logo.svg'
import { ReactComponent as Tg } from '../../../../../img/telegram-icon.svg'
import { ReactComponent as Vk } from '../../../../../img/vk-icon.svg'

const StyledSectionWrapp = styled.div`
  padding-top: 70px;
  padding-bottom: 50px;

  border-top: 1px solid ${(props) => props.theme.colors.black};
`

const StyledLogo = styled(Logo)`
  display: block;
  margin: 0 auto 70px auto;
`

const StyledContentWrapp = styled.div`
  display: flex;
`

const StyledСopyright = styled.div`
  width: 51%;
  line-height: 150%;

  span {
    text-transform: uppercase;
  }
`

const StyledCatalogList = styled.ul`
  width: 17%;
`

const StyledCustomerList = styled.ul`
  width: 17%;
`

const StyledSocialList = styled.ul`
  width: 17%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StyledFirstItem = styled.li`
  margin-bottom: 44px;
  font-size: 24px;
  line-height: 150%;
  text-transform: uppercase;
`

const StyledItems = styled.li`
  margin-bottom: 30px;

  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  cursor: pointer;
  transition: ${(props) => props.theme.other.time};

  &:hover {
    color: ${(props) => props.theme.colors.brown};

    transition: ${(props) => props.theme.other.time};
  }
`

const StyledSocialTextItem = styled(StyledFirstItem)`
  margin-right: 15px;
`

const StyledSocialIconItem = styled.li`
  display: flex;

  svg {
    margin-right: 20px;

    cursor: pointer;

    &:last-child {
      margin-right: 0px;
    }
  }

  .socIcon {
    path {
      transition: ${(props) => props.theme.other.time};
    }

    &:hover {
      path {
        fill: ${(props) => props.theme.colors.brown};

        transition: ${(props) => props.theme.other.time};
      }
    }
  }
`

const StyledVkIcon = styled(Vk)`
  .vkIcon {
    transition: ${(props) => props.theme.other.time};
  }

  &:hover {
    .vkIcon {
      fill: ${(props) => props.theme.colors.brown};

      transition: ${(props) => props.theme.other.time};
    }
    path {
      fill: white;
    }
  }
`

const FooterSection: React.FC = () => {
  return (
    <StyledSectionWrapp>
      <StyledLogo />
      <StyledContentWrapp>
        <StyledСopyright>
          <span>2022 GOOD LOOK</span>
          <p>Все права защищены</p>
        </StyledСopyright>
        <StyledCatalogList>
          <StyledFirstItem>Каталог</StyledFirstItem>
          <StyledItems>Для лица</StyledItems>
          <StyledItems>Для тела</StyledItems>
          <StyledItems>Акции</StyledItems>
        </StyledCatalogList>
        <StyledCustomerList>
          <StyledFirstItem>Покупателю</StyledFirstItem>
          <StyledItems>Личный кабинет</StyledItems>
          <StyledItems>Доставка и оплата</StyledItems>
          <StyledItems>Возврат</StyledItems>
        </StyledCustomerList>
        <StyledSocialList>
          <StyledSocialTextItem>Соц. сети</StyledSocialTextItem>
          <StyledSocialIconItem>
            <Tg />
            <Inst />
            <StyledVkIcon></StyledVkIcon>
          </StyledSocialIconItem>
        </StyledSocialList>
      </StyledContentWrapp>
    </StyledSectionWrapp>
  )
}

export default FooterSection
