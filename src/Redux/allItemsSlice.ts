import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

interface IItemsType {
  id: any
  img: string
  text: string
  price: number
  bestRating: number
}

interface IItemsStateType {
  items: IItemsType[]
  text: string
}

const initialState: IItemsStateType = {
  items: [
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-4.jpg')}`,
      text: 'Молочко для тела для сухой кожи с маслом какао',
      price: 2800,
      bestRating: 9,
    },
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-5.jpg')}`,
      text: 'Молочко-хайлайтер для тела с мерцающим эффектом, с витамином Е',
      price: 2500,
      bestRating: 10,
    },
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-6.jpg')}`,
      text: 'Лосьон для тела увлажняющий с пептидами',
      price: 2000,
      bestRating: 11,
    },
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-7.jpg')}`,
      text: 'Гель-пенка для умывания с аминокислотами',
      price: 2800,
      bestRating: 8,
    },
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-8.jpg')}`,
      text: 'Гипоаллергенное увлажняющее молочко для тела для сухой кожи',
      price: 2800,
      bestRating: 7,
    },
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-9.jpg')}`,
      text: 'Кондиционер для волос Scandinvian BIOLABS',
      price: 2800,
      bestRating: 6,
    },
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-10.jpg')}`,
      text: 'Шампунь для волос Scandinvian BIOLABS',
      price: 2800,
      bestRating: 5,
    },
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-11.jpg')}`,
      text: 'Крем для лица питательный для ежедневного применения',
      price: 2800,
      bestRating: 4,
    },
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-1.jpg')}`,
      text: 'Увлажняющий крем для лица с церамидами',
      price: 2800,
      bestRating: 3,
    },
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-2.jpg')}`,
      text: 'Кремовая сыворотка для лица с гиалуроновой кислотой',
      price: 2500,
      bestRating: 2,
    },
    {
      id: nanoid(),
      img: `${require('../img/items/item-pic-3.jpg')}`,
      text: 'Крем для контура глаз с эффектом лифтинга',
      price: 2000,
      bestRating: 1,
    },
  ],
  text: 'text from STORE',
}

const allItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
})

export const { changeText } = allItemsSlice.actions

export default allItemsSlice.reducer
