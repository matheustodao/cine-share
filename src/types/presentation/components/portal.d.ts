import { IChildren } from 'types/presentation/core';

export interface UsePortalHandlerProps {
  selector?: string
}

export interface PortalProps extends IChildren, UsePortalHandlerProps { }
