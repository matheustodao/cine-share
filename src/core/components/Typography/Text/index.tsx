/* eslint-disable react/require-default-props */
import { IChildren } from 'domain/core/core';
import { StyledText, TextProps as TextPropsStyled } from './styles';

interface TextProps extends TextPropsStyled, IChildren {
  as?: any
}

export function Text({
  children, ...props
}: TextProps) {
  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  );
}
