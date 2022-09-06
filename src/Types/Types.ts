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
    desktop: string
    desktopSmall: string
    tablet: string
    mobile: string
    mobileSmall: string
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
