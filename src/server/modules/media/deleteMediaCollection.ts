import { prisma } from 'core/prisma';
import { MediaParamsDeleteData } from 'types/server/media';

export async function deleteMediaCollectionUseCase({ mediaId }: MediaParamsDeleteData) {
  const removed = await prisma.media.delete({
    where: {
      id: mediaId,
    },
  });

  return removed;
}
