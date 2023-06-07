import { buttonColors } from 'presentation/components/Button/variants/colors';
import { ButtonHTMLAttributes } from 'react';
import { StyledBooleanType } from 'types/styled-components';
import { IChildren } from '../core';

export interface ButtonStyles {
  isoutline?: StyledBooleanType
  schemacolor?: keyof typeof buttonColors
  loading?: StyledBooleanType
}

export interface IButtonProps extends IChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean
  loading?: boolean,
  schemaColor?: ButtonStyles['schemacolor']
}
