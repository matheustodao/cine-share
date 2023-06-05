import { cineShareApi } from 'infra/api/cineShareApi';
import { useSession } from 'next-auth/react';

import { createContext } from 'react';

import { IChildren } from 'types/presentation/core';

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }: IChildren) {
  const { data } = useSession();

  cineShareApi.defaults.headers.common.userId = `${data?.user.id}`;

  return (
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  );
}
