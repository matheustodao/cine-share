import { DEFAULT_THEME } from 'presentation/assets/styles/themes';
import 'styled-components';

type DefaultThemeType = typeof DEFAULT_THEME;

export type TitleFontWeightType = keyof DefaultThemeType['fonts']['title']['weight'];
export type BodyFontWeightType = keyof DefaultThemeType['fonts']['body']['weight'];
export type SizesFontType = keyof DefaultThemeType['fonts']['sizes'];
export type TextColorType = keyof DefaultThemeType['colors']['text'];
export type StyledBooleanType = 'true' | 'false';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType { }
}
