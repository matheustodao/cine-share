export const nextAuthConfigs = {
  jwt: {
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },

  cookies: {
    sessionToken: 'next-auth.session-token',
    csrfToken: 'next-auth.csrf-token',
  },
};
