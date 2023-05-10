import { usePortalHandler } from 'core/handler/components/Portal';
import { PortalProps } from 'domain/core/components/portal';
import { createPortal } from 'react-dom';

export function Portal({ children, selector }: PortalProps) {
  const { element, mounted } = usePortalHandler({ selector });

  if (!mounted || !element) {
    return null;
  }

  return createPortal(children, element);
}
