import { usePortalHandler } from 'core/handler/components/Portal';
import { UsePortalHandlerProps } from 'domain/core/components/portal';

export function usePortalModel({ selector }: UsePortalHandlerProps) {
  const { element, mounted } = usePortalHandler({ selector });

  return {
    element, mounted,
  };
}
