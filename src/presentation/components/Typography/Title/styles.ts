import styled, { css } from 'styled-components';
import { SizesFontType, TextColorType, TitleFontWeightType } from 'types/styled-components';

export interface TitleProps {
  weight?: TitleFontWeightType,
  schema?: TextColorType,
  size?: SizesFontType,
}

export const StyledTitle = styled.h2<TitleProps>(({
  theme, weight, schema, size,
}) => css`
  font-family: ${theme.fonts.title.family};
  ${schema && css`
    color: ${theme.colors.text[schema]};
  `}

  ${weight && css`
    font-weight: ${theme.fonts.title.weight[weight]};
  `}

  font-size: ${!size ? theme.fonts.sizes.medium : theme.fonts.sizes[size]};
`);
