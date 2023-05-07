import { usePortalModel } from 'core/model/components/Portal';
import { PortalProps } from 'domain/core/components/portal';
import { createPortal } from 'react-dom';

export function Portal({ children, selector }: PortalProps) {
  const { element, mounted } = usePortalModel({ selector });

  if (!mounted || !element) {
    return null;
  }

  return createPortal(children, element);
}
