import { prisma } from 'core/prisma';
import { CollectionParams, CollectionParamsData } from 'types/server/collection';

export async function createCollectionUseCase({
  description, name, userId,
}: CollectionParamsData): Promise<CollectionParams> {
  const created = await prisma.collection.create({
    data: {
      name,
      description,
      userId,
    },
  });

  return created;
}
