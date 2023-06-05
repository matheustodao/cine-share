import { getToken } from 'next-auth/jwt';
import { cookies } from 'next/headers';

export async function getUserId(): Promise<string | undefined> {
  const cookieStore = cookies();
  const jwt = await getToken({
    req: {
      cookies: cookieStore as never,
    } as never,
  });

  return jwt?.sub;
}
