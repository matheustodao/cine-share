import { getUserId } from 'core/getUserId';
import { NextResponse } from 'next/server';
import { indexUserCollectionUseCase } from 'server/modules/collection/indexUserCollection';

export async function GET() {
  const userId = await getUserId();

  if (!userId) {
    return NextResponse.json({
      error: 'Not authenticate',
    }, { status: 400 });
  }

  const collectionExists = await indexUserCollectionUseCase(userId);

  return NextResponse.json(collectionExists);
}
