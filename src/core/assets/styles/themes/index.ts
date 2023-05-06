import { DefaultTheme } from 'styled-components';

import { brandColor } from './common/brandColor';
import { commonStyles } from './common/common';
import { defaultTheme } from './default';

export function combineTheme(theme: any): DefaultTheme {
  const newTheme = { ...theme };

  Object.assign(newTheme, {
    ...commonStyles,
    colors: {
      ...newTheme.colors,
      ...commonStyles.colors,
      brand: brandColor,
    },
  });

  return newTheme;
}

export const DEFAULT_THEME = combineTheme(defaultTheme);
