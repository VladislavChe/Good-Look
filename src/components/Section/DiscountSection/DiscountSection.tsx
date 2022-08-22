import React from 'react'
import styled from 'styled-components'
import Button from '../../_Utils/Button'

const StyledTitle = styled.h2`
  max-width: 700px;

  line-height: 62px;
  letter-spacing: 0.08em;

  color: #fff;
`

const DiscountSection: React.FC = () => {
  return (
    <>
      <StyledTitle>СКИДКА 30% НА НОВЫЙ УВЛАЖНЯЮЩИЙ КРЕМ NEUTHY</StyledTitle>
      <Button btnText='в каталог' marginTop='31px' uppercase={true} variant='white' />
    </>
  )
}

export default DiscountSection
