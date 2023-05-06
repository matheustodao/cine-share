import { DEFAULT_THEME } from 'core/assets/styles/themes';
import 'styled-components';

type DefaultThemeType = typeof DEFAULT_THEME;

export type TitleFontWeightType = keyof DefaultThemeType['fonts']['title']['weight'];
export type BodyFontWeightType = keyof DefaultThemeType['fonts']['body']['weight'];
export type SizesFontType = keyof DefaultThemeType['fonts']['sizes'];
export type TextColorType = keyof DefaultThemeType['colors']['text'];

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType { }
}
