import React from 'react'
import styled from 'styled-components'
import Button from '../_Utils/Button'
import Nav from './Nav/Nav'

const StyledFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 81px;
`

const StyledOffer = styled.div`
  max-width: 57%;
`

const StyledPhotoCream = styled.div`
  width: 432px;
  height: 332px;
  margin-top: 90px;
`

const StyledPhotoFace = styled.div`
  min-width: 665px;
  min-height: 750px;
`

const Header: React.FC = () => {
  return (
    <header>
      <Nav />
      <StyledFlexBox>
        <StyledOffer>
          <h1>Натуральная органическая косметика</h1>
          <Button btnText='В каталог' uppercase={true} marginTop={'50px'} />
          <StyledPhotoCream>
            <img src={require('../../img/offer-cream.jpg')} alt='Cream' />
          </StyledPhotoCream>
        </StyledOffer>
        <StyledPhotoFace>
          <img src={require('../../img/offer-face.jpg')} alt='Creame on Face' />
        </StyledPhotoFace>
      </StyledFlexBox>
    </header>
  )
}

export default Header
