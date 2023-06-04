import { prisma } from 'core/prisma';
import { CollectionParams } from 'types/server/collection';

export async function indexUserCollectionUseCase(userId: string): Promise<CollectionParams[]> {
  const collections = await prisma.collection.findMany({
    where: {
      userId,
    },
  });

  return collections;
}
