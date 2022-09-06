import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../../../Redux/hook'
import Card from '../../../../Card/Card'

const StyledTitle = styled.h2`
  text-align: center;
`

const StyledBestSalesList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 55px;
`

const StyledCollectionItem = styled.li`
  margin-right: 30px;

  &:last-child {
    margin-right: 0px;
  }
`

const BestSalesSection: React.FC = () => {
  const items = useAppSelector((state) => state.allItemsSlice.items)
  const dispatch = useAppDispatch()

  const sortedByBestRatig = [...items].sort((x, y) => x.bestRating - y.bestRating)

  const renderedItems = sortedByBestRatig.slice(-3).map((item) => {
    return (
      <StyledCollectionItem key={`${item} ${item.id}`}>
        <Card id={item.id} img={item.img} text={item.text} price={item.price} />
      </StyledCollectionItem>
    )
  })

  return (
    <div>
      <StyledTitle>Бестселлеры</StyledTitle>
      <StyledBestSalesList>{renderedItems}</StyledBestSalesList>
    </div>
  )
}

export default BestSalesSection
