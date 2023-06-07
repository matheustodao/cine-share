import { getUserId } from 'core/getUserId';
import { NextResponse } from 'next/server';
import { setMediaInCollectionUseCase } from 'server/modules/media/setMediaInCollection';
import { MediaParamsData } from 'types/server/media';

export async function POST(req: Request) {
  const {
    collectionId,
    tmdb_id,
    type,
    original_language,
    poster_path,
    title,
  }: Omit<MediaParamsData, 'userId'> = await req.json();

  if (!collectionId || !tmdb_id || !type || !original_language || !poster_path || !title) {
    return NextResponse.json({
      error: 'collectionId, tmdb_id, original_language, poster_path and type fields is missing',
    }, { status: 400 });
  }

  const userId = await getUserId();

  if (!userId) {
    return NextResponse.json({
      error: 'Not authenticate',
    }, { status: 400 });
  }

  const movieData = await setMediaInCollectionUseCase({
    collectionId,
    tmdb_id,
    type,
    userId,
    original_language,
    poster_path,
    title,
  });

  return NextResponse.json(movieData);
}
