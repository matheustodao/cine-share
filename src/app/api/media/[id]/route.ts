import { getUserId } from 'core/getUserId';
import { NextResponse } from 'next/server';
import { deleteMediaCollectionUseCase } from 'server/modules/media/deleteMediaCollection';

export async function DELETE(req: Request, ctx: any) {
  const { id, collectionId } = ctx.params;

  if (!id) {
    return NextResponse.json({
      error: 'Param id is missing',
    }, { status: 400 });
  }

  const userId = await getUserId();

  if (!userId) {
    return NextResponse.json({
      error: 'Not authenticate',
    }, { status: 400 });
  }

  await deleteMediaCollectionUseCase({
    mediaId: id,
    userId,
    collectionId,
  });

  return NextResponse.json({}, { status: 201 });
}
