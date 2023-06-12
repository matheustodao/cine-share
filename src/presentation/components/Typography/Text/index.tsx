'use client';

import { IChildren } from 'types/presentation/core';
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
