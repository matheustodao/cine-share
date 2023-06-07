import { getUserId } from 'core/getUserId';
import { NextResponse } from 'next/server';
import { createCollectionUseCase } from 'server/modules/collection/createCollection';
import { CollectionParamsData } from 'types/server/collection';

export async function POST(req: Request) {
  const { name, description }: CollectionParamsData = await req.json();

  if (!name) {
    return NextResponse.json({
      error: 'name field is missing',
    }, { status: 400 });
  }

  const userId = await getUserId();

  if (!userId) {
    return NextResponse.json({
      error: 'Not authenticate',
    }, { status: 400 });
  }

  const collectionData = await createCollectionUseCase({
    userId,
    name,
    description,
  });

  return NextResponse.json(collectionData);
}
