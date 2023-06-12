'use client';

import { IChildren } from 'types/presentation/core';
import { StyledTitle, TitleProps as TitlePropsStyled } from './styles';

interface TitleProps extends TitlePropsStyled, IChildren {
  as?: any
}

export function Title({
  children, ...props
}: TitleProps) {
  return (
    <StyledTitle {...props}>
      {children}
    </StyledTitle>
  );
}
