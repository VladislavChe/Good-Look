import React from 'react'
import styled from 'styled-components'
import Button from '../../_Utils/Button'

const StyledTitle = styled.h2`
  max-width: 722px;

  color: #fff;
`

const DiscountSection: React.FC = () => {
  return (
    <>
      <StyledTitle>СКИДКА 30% НА НОВЫЙ УВЛАЖНЯЩИЙ КРЕМ NEUTHY</StyledTitle>
      <Button btnText='в каталог' marginTop='31px' uppercase={true} />
    </>
  )
}

export default DiscountSection
