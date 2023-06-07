import { prisma } from 'core/prisma';
import { ResponsesCollection } from 'types/server/collection';

export async function indexUserCollectionUseCase(userId: string): Promise<ResponsesCollection[]> {
  const collections = await prisma.collection.findMany({
    where: {
      userId,
    },
    select: {
      _count: {
        select: {
          media: true,
        },
      },
      id: true,
      name: true,
      description: true,
      user: {
        select: {
          name: true,
          email: true,
          id: true,
        },
      },
      media: true,
    },
  });

  return collections;
}
