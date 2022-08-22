import styled from 'styled-components'
import Button from '../../_Utils/Button'

const StyledFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const StyledLeftContent = styled.div`
  width: 49%;

  button {
    width: 189px;
    height: 60px;
  }
`

const StyledTitle = styled.h2`
  margin-bottom: 17px;

  letter-spacing: 0.08em;
`

const StyledText = styled.p`
  max-width: 545px;
  line-height: 140%;
  letter-spacing: 0.1em;
`

const StyledRightPhoto = styled.div`
  width: 51%;
  padding-left: 30px;
`

const StyledImgWrapp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 86px;
`

const StyledImgFirst = styled.img`
  width: 317px;
  height: 308px;
  margin-right: 30px;
`
const StyledImgSecond = styled.img`
  width: 317px;
  height: 308px;
`
const StyledImgThird = styled.img``

const StyledBottomLine = styled.div`
  height: 1px;
  width: 100%;

  background-color: ${(props) => props.theme.colors.black};
`

const MoreInfoSection: React.FC = () => {
  return (
    <StyledFlexBox>
      <StyledLeftContent>
        <StyledTitle>бОЛЬШЕ ИНФОРАЦИИ В НАШЕМ ИНСТАГРАМ</StyledTitle>
        <StyledText>
          Подписывайся на наш инстаграм, чтобы следить за нашими новостями и новинками
        </StyledText>
        <Button btnText='Перейти' uppercase={true} marginTop='42px' variant='black' />
        <StyledImgWrapp>
          <StyledImgFirst
            className='bgElipse'
            src={require('../../../img/more-info-img-1.jpg')}
            alt='copyright-icon'
          />
          <StyledImgSecond
            className='bgElipse'
            src={require('../../../img/more-info-img-2.jpg')}
            alt='copyright-icon'
          />
        </StyledImgWrapp>
      </StyledLeftContent>
      <StyledRightPhoto>
        <StyledImgThird
          className='bgElipse'
          src={require('../../../img/more-info-img-3.jpg')}
          alt='copyright-icon'
        />
      </StyledRightPhoto>
    </StyledFlexBox>
  )
}

export default MoreInfoSection
