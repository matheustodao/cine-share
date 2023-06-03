import { buttonColors } from 'presentation/components/Button/variants/colors';
import { ButtonHTMLAttributes } from 'react';
import { StyledBooleanType } from 'types/styled-components';
import { IChildren } from '../core';

export interface ButtonStyles {
  isoutline: StyledBooleanType
  schemaColor?: keyof typeof buttonColors
}

export interface IButtonProps extends Omit<ButtonStyles, 'isoutline'>, IChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean
  loading?: boolean
}
