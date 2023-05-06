import { BodyFontWeightType, SizesFontType, TextColorType } from 'domain/styled-components';
import styled, { css } from 'styled-components';

export interface TextProps {
  weight?: BodyFontWeightType,
  schema?: TextColorType,
  size?: SizesFontType,
}

export const StyledText = styled.h2<TextProps>(({
  theme, weight, schema, size,
}) => css`
  font-family: ${theme.fonts.body.family};
  ${schema && css`
    color: ${theme.colors.text[schema]};
  `}

  ${weight && css`
    font-weight: ${theme.fonts.body.weight[weight]};
  `}

  font-size: ${!size ? theme.fonts.sizes.medium : theme.fonts.sizes[size]};
`);
