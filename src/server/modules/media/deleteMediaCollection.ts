import { prisma } from 'core/prisma';
import { MediaParamsDeleteData } from 'types/server/media';

export async function deleteMediaCollectionUseCase({
  mediaId, userId, collectionId,
}: MediaParamsDeleteData) {
  const removed = await prisma.media.deleteMany({
    where: {
      AND: {
        id: mediaId,
        collectionId,
        collection: {
          userId,
        },
      },
    },
  });

  return removed;
}
