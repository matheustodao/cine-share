import { NextResponse } from 'next/server';
import { getCollectionUseCase } from 'server/modules/collection/getCollection';

export async function GET(req: Request, ctx: any) {
  const { id } = ctx.params;

  if (!id) {
    return NextResponse.json({
      error: 'Param id is missing',
    }, { status: 400 });
  }
  const collectionExists = await getCollectionUseCase(id);

  if (!collectionExists) {
    return NextResponse.json({
      error: `Collection not found with id=${id}`,
    }, { status: 400 });
  }

  return NextResponse.json(collectionExists);
}
