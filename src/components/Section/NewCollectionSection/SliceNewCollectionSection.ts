import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
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
  ],
  text: 'text from STORE',
}

const newCollectionSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload
    },
  },
})

export const { changeText } = newCollectionSlice.actions

export default newCollectionSlice.reducer
