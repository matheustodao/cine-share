import { crypt } from 'core/crypt';
import { prisma } from 'core/prisma';
import { AuthParams, UserParams } from 'types/server/auth';

export async function authenticateUserUseCase({
  email, password,
}: AuthParams): Promise<UserParams | null> {
  const existsUser = await prisma.user.findUnique({ where: { email } });

  if (!existsUser) {
    return null;
  }

  const isValidPassword = await crypt.compare(existsUser.password, password);

  if (!isValidPassword) {
    return null;
  }

  const userData = existsUser;
  userData.password = '';

  return userData;
}
