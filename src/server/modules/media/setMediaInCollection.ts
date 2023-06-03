import { prisma } from 'core/prisma';
import { MediaParams, MediaParamsData } from 'types/server/media';

export async function setMediaInCollectionUseCase({
  collectionId, tmdb_id, type,
}: MediaParamsData): Promise<MediaParams> {
  const setInCollection = await prisma.media.create({
    data: { collectionId, tmdb_id, type },
  });

  return setInCollection;
}
