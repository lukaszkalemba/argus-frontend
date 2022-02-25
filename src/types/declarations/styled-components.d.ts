import 'styled-components/macro';
import { theme } from 'styles/theme/index';

type Theme = typeof theme;

declare module 'styled-components/macro' {
  export interface DefaultTheme extends Theme {}
}
