import { commonStyles } from './common/common';
import { defaultTheme } from './default';

const combineTheme = (theme: typeof defaultTheme) => ({
  ...theme,
  ...commonStyles,
  colors: {
    ...theme.colors,
    ...commonStyles.colors,
  },
});

export const DEFAULT_THEME = combineTheme(defaultTheme);
