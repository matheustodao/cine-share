import { DEFAULT_THEME } from 'core/assets/styles/themes';
import 'styled-components';

type DefaultThemeType = typeof DEFAULT_THEME;

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType { }
}
