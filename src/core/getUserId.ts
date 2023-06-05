import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';
import { SECRET_JWT } from './configs/env';
import { nextAuthConfigs } from './configs/nextAuth';

export async function getUserId(): Promise<string | undefined> {
  const cookieStore = cookies();
  const tokenEncrypt = cookieStore.get(nextAuthConfigs.cookies.sessionToken)?.value;

  if (!tokenEncrypt) {
    return undefined;
  }

  const jwt = await decode({
    token: tokenEncrypt,
    secret: SECRET_JWT,
  });

  return jwt?.sub;
}
