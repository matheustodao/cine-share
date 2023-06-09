import { NODE_ENV } from './env';

export const nextAuthConfigs = {
  jwt: {
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },

  cookies: {
    sessionToken: `${NODE_ENV !== 'development' ? '__Secure-' : ''}next-auth.session-token`,
    csrfToken: `${NODE_ENV !== 'development' ? '__Secure-' : ''}next-auth.csrf-token`,
  },
};
