import { prisma } from 'core/prisma';
import { CollectionParams } from 'types/server/collection';

export async function indexCollectionUseCase(): Promise<CollectionParams[]> {
  const collections = await prisma.collection.findMany();

  return collections;
}
