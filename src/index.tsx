import ReactDOM from 'react-dom/client'
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
// @ts-ignore
import LighthausEot from '../src/fonts/Lighthaus/Lighthaus.eot'
// @ts-ignore
import LighthausWoff from '../src/fonts/Lighthaus/Lighthaus.woff'
// @ts-ignore
import LighthausTtf from '../src/fonts/Lighthaus/Lighthaus.ttf'
// @ts-ignore
import CenturyGothicEot from '../src/fonts/CenturyGothic/CenturyGothic.eot'
// @ts-ignore
import CenturyGothicWoff from '../src/fonts/CenturyGothic/CenturyGothic.woff'
// @ts-ignore
import CenturyGothicTtf from '../src/fonts/CenturyGothic/CenturyGothic.ttf'
import App from './App'

import { Provider } from 'react-redux'
import { store } from './Redux/store'

const defaultTheme: DefaultTheme = {
  fonts: {
    mainFont: 'CenturyGothic',
    titleFont: 'Lighthaus',
    mainFontSize: '18px',
  },
  colors: {
    black: '#454545',
    gray: '#848484',
    white: '#ffff',
    brown: '#C9814F',
    browner: '#AF632D',
  },
  media: {
    desktop: '(max-width: 2000px)',
    desktopSmall: '(max-width: 1200px)',
    tablet: '(max-width: 992px)',
    mobile: '(max-width: 768px)',
    mobileSmall: '(max-width: 576px)',
    mobileExtraSmall: '(max-width: 350px)',
  },
  other: {
    time: 'all 0.3s ease-in-out',
  },
}

const darkTheme: DefaultTheme = {
  fonts: { ...defaultTheme.fonts },
  colors: {
    black: '#454545',
    gray: '#848484',
    white: '#ffff',
    brown: 'blue',
    browner: '#AF632D',
  },
  media: { ...defaultTheme.media },
  other: { ...defaultTheme.other },
}

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lighthaus';
    src: url(${LighthausEot});
    src: local('Lighthaus'),
      url(${LighthausWoff}) format('woff'),
      url(${LighthausTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'CenturyGothic';
    src: url(${CenturyGothicEot});
    src: local('Century Gothic'), local('CenturyGothic'),
      url(${CenturyGothicWoff}) format('woff'),
      url(${CenturyGothicTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  /* RESET CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    min-width: 320px;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-family: ${defaultTheme.fonts.mainFont};
    font-size: ${defaultTheme.fonts.mainFontSize};
    font-weight: 400;
    line-height: 1;
    color: ${defaultTheme.colors.black};
    overflow-x: hidden;
  }

  h1,
  h2 {
    font-family: ${defaultTheme.fonts.titleFont};
    text-transform: uppercase
  }
  
  h1 {
    font-size: 64px;
    line-height: 170%;
  }

  h2 {
    font-size: 48px;
    line-height: 62px;
  }
  
  a {
    color: inherit;
    list-style-type: none;
    text-decoration: none;
    transition: ${defaultTheme.other.time}
  }

  img {
    width: 100%;
    height: 100%
  }

  button {
    cursor: pointer;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;

    @media ${(props) => props.theme.media.tablet} {
    padding: 0 20px;
  }
  }

  .containerFluid {
    position: relative;
    padding: 0 40px;
  }

`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={defaultTheme}>
    <Normalize />
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
)
