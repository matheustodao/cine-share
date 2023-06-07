import {
  forwardRef,
} from 'react';
import { CheckboxElementProps } from 'types/presentation/collection';
import { Container } from './styled';

export const CheckboxElement = forwardRef<HTMLInputElement, CheckboxElementProps>(({
  children, label, isChecked, ...props
}, inputRef) => (
  <Container htmlFor={label} check={isChecked ? 'true' : 'false'}>
    {children}
    <input ref={inputRef} {...props} type="checkbox" id={label} />
  </Container>
));
