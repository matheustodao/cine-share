import { ReactNode } from 'react';

interface IChildren {
  children: ReactNode
}

export interface IProviderProps extends IChildren {
  session: SessionProviderProps['session']
}
