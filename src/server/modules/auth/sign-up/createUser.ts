import { User } from '@prisma/client';
import { crypt } from 'core/crypt';
import { prisma } from 'core/prisma';
import { UserParamsData } from 'types/server/auth';

export async function createUserUseCase({ name, email, password }: UserParamsData): Promise<User> {
  const passwordHashed = await crypt.hash(password);

  const created = await prisma.user.create({
    data: {
      email,
      name,
      password: passwordHashed,
    },
  });

  return created;
}
