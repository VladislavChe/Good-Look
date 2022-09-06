import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../../../Redux/hook'
import Card from '../../../../Card/Card'

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

const NewCollectionSection: React.FC = () => {
  const items = useAppSelector((state) => state.allItemsSlice.items)
  const dispatch = useAppDispatch()

  const renderedItems = items.slice(-3).map((item) => {
    return (
      <StyledCollectionItem key={`${item} ${item.id}`}>
        <Card id={item.id} img={item.img} text={item.text} price={item.price} />
      </StyledCollectionItem>
    )
  })

  return (
    <>
      <StyledTitle>Новая коллекция</StyledTitle>
      <StyledCollectionList>{renderedItems}</StyledCollectionList>
    </>
  )
}

export default NewCollectionSection
