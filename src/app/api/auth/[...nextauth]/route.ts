/* eslint-disable no-param-reassign */
import { VERCEL_URL } from 'core/configs/env';
import { nextAuthConfigs } from 'core/configs/nextAuth';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { authenticateUserUseCase } from 'server/modules/auth/sign-in/authenticateUser';

export const authOptions: NextAuthOptions = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        if (!email || !password) {
          throw new Error('Missing email or password');
        }

        const user = await authenticateUserUseCase({ email, password });

        if (!user) {
          throw new Error('Invalid email or password');
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  jwt: {
    maxAge: nextAuthConfigs.jwt.maxAge,
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      return token;
    },

    session: async ({ session, token }) => {
      if (token) {
        const newSessionInfo = {
          ...session,
          user: {
            ...session.user,
            id: token.id,
          },
        };

        return newSessionInfo;
      }

      return session;
    },
  },

  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
    signOut: '/',
  },
  session: {
    strategy: 'jwt',
  },
  cookies: {
    sessionToken: {
      name: nextAuthConfigs.cookies.sessionToken,
      options: {
        domain: VERCEL_URL ? 'vercel.app' : undefined,
      },
    },
  },
});

export { authOptions as GET, authOptions as POST };
