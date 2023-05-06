/* eslint-disable react/require-default-props */
import { IChildren } from 'domain/core/core';
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
