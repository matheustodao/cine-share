import { prisma } from 'core/prisma';
import { MediaParams, MediaParamsData } from 'types/server/media';

export async function setMediaInCollectionUseCase({
  collectionId, tmdb_id, type, userId, original_language, poster_path, title,
}: MediaParamsData): Promise<MediaParams> {
  const collection = await prisma.collection.findUnique({
    where: {
      id: collectionId,
    },
    include: {
      media: {
        select: {
          tmdb_id: true,
        },
      },
    },
  });

  if (!collection) {
    throw new Error('Not found collection with this id');
  }

  if (collection.userId !== userId) {
    throw new Error('You not have access in this collection');
  }

  const alreadyExistsMedia = collection.media.findIndex(
    (currentMedia) => currentMedia.tmdb_id === tmdb_id,
  );

  if (alreadyExistsMedia) {
    throw new Error('This media already registered');
  }

  const setInCollection = await prisma.media.create({
    data: {
      collectionId,
      tmdb_id,
      type,
      original_language,
      poster_path,
      title,
    },
  });

  return setInCollection;
}
