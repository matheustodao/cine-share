import { prisma } from 'core/prisma';
import { UserParams } from 'types/server/auth';

export async function findUserByEmailUseCase(email: string): Promise<UserParams | null> {
  const userFound = await prisma.user.findFirst({ where: { email } });

  return userFound;
}
