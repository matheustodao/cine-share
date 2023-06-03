import { NextResponse } from 'next/server';
import { createCollectionUseCase } from 'server/modules/collection/createCollection';
import { CollectionParamsData } from 'types/server/collection';

export async function POST(req: Request) {
  const { userId, name, description }: CollectionParamsData = await req.json();

  if (!name || !userId) {
    return NextResponse.json({
      error: 'Name or userId fields is missing',
    }, { status: 400 });
  }

  const collectionData = await createCollectionUseCase({
    userId,
    name,
    description,
  });

  return NextResponse.json(collectionData);
}
