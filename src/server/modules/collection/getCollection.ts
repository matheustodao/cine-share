import { Media, User } from '@prisma/client';
import { prisma } from 'core/prisma';
import { CollectionParams } from 'types/server/collection';

type Response = CollectionParams & { media: Media[], user: Pick<User, 'name'> };
export async function getCollectionUseCase(
  collectionId: string,
): Promise<Response | null> {
  const collectionFound = await prisma.collection.findFirst({
    where: {
      id: collectionId,
    },
    include: {
      user: { select: { name: true } },
      media: true,
    },
  });

  return collectionFound;
}
