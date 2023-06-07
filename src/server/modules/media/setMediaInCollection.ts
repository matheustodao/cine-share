import { prisma } from 'core/prisma';
import { MediaParams, MediaParamsData } from 'types/server/media';

export async function setMediaInCollectionUseCase({
  collectionId, tmdb_id, type, userId, original_language, poster_path, title,
}: MediaParamsData): Promise<MediaParams[]> {
  const mediasAdded = [] as MediaParams[];
  collectionId.forEach(async (currentId) => {
    const collection = await prisma.collection.findUnique({
      where: {
        id: currentId,
      },
      include: {
        media: true,
      },
    });

    if (!collection) return;

    if (collection?.userId !== userId) {
      throw new Error('Você não tem acesso a essa coleção');
    }

    const alreadyExistsMedia = await prisma.collection.findFirst({
      where: {
        AND: {
          id: {
            equals: currentId,
          },
          media: {
            some: {
              tmdb_id: String(tmdb_id),
            },
          },
        },
      },
    });

    if (alreadyExistsMedia) return;

    const createMediaData = {
      tmdb_id: String(tmdb_id),
      type,
      original_language,
      poster_path,
      title,
      collectionId: currentId,
    };

    const setInCollection = await prisma.media.create({
      data: createMediaData,
    });

    mediasAdded.push(setInCollection);
  });

  return mediasAdded;
}
