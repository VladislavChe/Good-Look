import 'styled-components'
import { ITheme } from './Types/Types'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
