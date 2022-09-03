import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Card from '../../Card/Card'
import { changeText } from '../NewCollectionSection/SliceNewCollectionSection'

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

const NewCollectionSection = () => {
  const items2 = useSelector((state) => state.newCollectionItems.items)
  const text = useSelector((state) => state.newCollectionItems.text)

  const dispatch = useDispatch()

  return (
    <>
      <div>{text}</div>
      <button onClick={() => dispatch(changeText('RAbotAeT'))}>Click</button>
      <StyledTitle>Новая коллекция</StyledTitle>
      <StyledCollectionList>
        {items2.map((item) => {
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
