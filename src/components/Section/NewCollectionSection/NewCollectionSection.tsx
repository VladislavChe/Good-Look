import React from 'react'
import styled from 'styled-components'
import Card from '../../Card/Card'

const StyledTitle = styled.h2`
  text-align: center;
`

const StyledCollectionList = styled.ul`
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

const items = [
  {
    id: 1,
    img: `${require('../../../img/new-collection-pic-1.jpg')}`,
    text: 'Увлажняющий крем для лица с церамидами',
    price: 2800,
  },
  {
    id: 2,
    img: `${require('../../../img/new-collection-pic-2.jpg')}`,
    text: 'Кремовая сыворотка для лица с гиалуроновой кислотой',
    price: 2500,
  },
  {
    id: 3,
    img: `${require('../../../img/new-collection-pic-3.jpg')}`,
    text: 'Крем для контура глаз с эффектом лифтинга',
    price: 2000,
  },
]

const NewCollectionSection: React.FC = () => {
  return (
    <>
      <StyledTitle>Новая коллекция</StyledTitle>
      <StyledCollectionList>
        {items.map((item) => {
          return (
            <StyledCollectionItem key={`${item} ${item.id}`}>
              <Card id={item.id} img={item.img} text={item.text} price={item.price} />
            </StyledCollectionItem>
          )
        })}
      </StyledCollectionList>
    </>
  )
}

export default NewCollectionSection
