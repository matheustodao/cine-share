import { IChildren } from 'domain/core/core';

export interface UsePortalHandlerProps {
  selector?: string
}

export interface PortalProps extends IChildren, UsePortalHandlerProps { }
