import { crypt } from 'core/crypt';
import { prisma } from 'core/prisma';
import { AuthParams, UserParams } from 'types/server/auth';

export async function authenticateUserUseCase({
  email, password,
}: AuthParams): Promise<Omit<UserParams, 'password'> | null> {
  const existsUser = await prisma.user.findFirst({ where: { email } });

  if (!existsUser) {
    return null;
  }

  const isValidPassword = crypt.compare(existsUser.password, password);

  if (!isValidPassword) {
    return null;
  }

  const userData = existsUser;
  userData.password = '';

  return existsUser;
}
