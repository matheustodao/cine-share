import { NextResponse } from 'next/server';
import { setMediaInCollectionUseCase } from 'server/modules/media/setMediaInCollection';
import { MediaParamsData } from 'types/server/media';

export async function POST(req: Request) {
  const { collectionId, tmdb_id, type }: MediaParamsData = await req.json();

  if (!collectionId || !tmdb_id || !type) {
    return NextResponse.json({
      error: 'collectionId, tmdb_id and type fields is missing',
    }, { status: 400 });
  }

  const movieData = await setMediaInCollectionUseCase({
    collectionId,
    tmdb_id,
    type,
  });

  return NextResponse.json(movieData);
}
