import styled from 'styled-components'
import { ICard } from '../../Types/Types'
import { toLocal } from '../_tools/Tools'
import Button from '../_Utils/Button'

const StyledTop = styled.div`
  img {
    width: 433px;
    height: 513px;
  }
`

const StyledBottom = styled.div`
  margin-top: 20px;
`

const StyledText = styled.p`
  margin-bottom: 20px;
  max-width: 394px;
`

const StyledPriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.black};

  span {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
  }

  button {
    width: 157px;
    height: 50px;
  }
`

interface CardProps extends ICard {}

const Card: React.FC<CardProps> = ({ id, img, text, price }) => {
  const modifedPrice = toLocal(price)

  return (
    <>
      <StyledTop>
        <img src={img} alt='product' />
      </StyledTop>
      <StyledBottom>
        <StyledText>{text}</StyledText>
        <StyledPriceBlock>
          <span>{modifedPrice} ₽</span>
          <Button btnText='В корзину' uppercase={false} marginTop='0px' />
        </StyledPriceBlock>
      </StyledBottom>
    </>
  )
}

export default Card
