import { forwardRef } from 'react';
import { IButtonProps } from 'types/presentation/button';
import { Loader } from '../Loader';
import { ButtonStyled } from './styles';

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
  children, loading, outline = false, schemaColor, ...props
}, elementRef) => (
  <ButtonStyled
    type="button"
    {...props}
    ref={elementRef}
    isoutline={outline ? 'true' : 'false'}
    schemaColor={schemaColor}
    disabled={loading || props.disabled}
  >
    {loading && (
      <div className="loader">
        <Loader />
      </div>
    )}
    {children}
  </ButtonStyled>
));

Button.defaultProps = {
  outline: false,
  schemaColor: 'blue',
  loading: false,
};
