import React from 'react'
import styled from 'styled-components'
import Button from '../../../../_Utils/Button'

const StyledFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 81px;

  @media ${(props) => props.theme.media.tablet} {
    flex-direction: column;
    margin-top: 40px;
  }
`

const StyledOffer = styled.div`
  width: 57%;

  @media ${(props) => props.theme.media.tablet} {
    width: 100%;
    order: 2;

    button {
      margin: 50px auto 0;
    }
  }

  @media ${(props) => props.theme.media.mobileSmall} {
    button {
      margin: 9px auto 0;
    }
  }
`

const StyledTitle = styled.h1`
  @media ${(props) => props.theme.media.desktopSmall} {
    font-size: 60px;
  }

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 50px;
    text-align: center;
  }

  @media ${(props) => props.theme.media.mobileSmall} {
    font-size: 36px;
  }
`

const StyledPhotoCream = styled.div`
  margin-top: 90px;
  max-width: 50%;

  img {
    max-width: 432px;
    height: auto;
  }

  @media ${(props) => props.theme.media.mobileSmall} {
    margin-top: 31px;
  }
`

const StyledPhotoFace = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 43%;

  img {
    width: 100%;
    height: auto;
    max-width: 665px;
  }

  @media ${(props) => props.theme.media.desktopSmall} {
    img {
      max-width: 100%;
      max-height: auto;
    }
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 100%;
    order: 1;
  }
`

const OfferSection: React.FC = () => {
  return (
    <>
      <StyledFlexBox>
        <StyledOffer>
          <StyledTitle>Натуральная органическая косметика</StyledTitle>
          <Button btnText='В каталог' uppercase={true} marginTop={'50px'} variant='black' />
          <StyledPhotoCream>
            <img src={require('../../../../../img/offer-cream.jpg')} alt='Cream' />
          </StyledPhotoCream>
        </StyledOffer>
        <StyledPhotoFace>
          <img src={require('../../../../../img/offer-face.jpg')} alt='Cream on Face' />
        </StyledPhotoFace>
      </StyledFlexBox>
    </>
  )
}

export default OfferSection
