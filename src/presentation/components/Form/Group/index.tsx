import { useAutoAnimate } from '@formkit/auto-animate/react';

import { FormGroupProps } from 'types/presentation/formGroup';
import { Container, ErrorMessage } from './styles';

export function FormGroup({ children, errorMessage }: FormGroupProps) {
  const [parent] = useAutoAnimate();

  return (
    <Container ref={parent}>
      {children}
      {errorMessage && (
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      )}
    </Container>
  );
}
