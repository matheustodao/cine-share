import { usePortalHandler } from 'presentation/handler/components/Portal';
import { createPortal } from 'react-dom';
import { PortalProps } from 'types/presentation/portal';

export function Portal({ children, selector }: PortalProps) {
  const { element, mounted } = usePortalHandler({ selector });

  if (!mounted || !element) {
    return null;
  }

  return createPortal(children, element);
}
