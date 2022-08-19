export interface ITheme {
  fonts: {
    mainFont: string
    titleFont: string
    mainFontSize: string
  }
  colors: {
    black: string
    gray: string
    white: string
    brown: string
    browner: string
  }
  media: {
    phone: string
    tablet: string
  }
  other: {
    time: string
  }
}

export interface ICard {
  id: number
  img: string
  text: string
  price: number
}
