import { NextResponse } from 'next/server';
import { deleteMediaCollectionUseCase } from 'server/modules/media/deleteMediaCollection';

export async function DELETE(req: Request, ctx: any) {
  const { id } = ctx.params;

  if (!id) {
    return NextResponse.json({
      error: 'Param id is missing',
    }, { status: 400 });
  }

  await deleteMediaCollectionUseCase({
    mediaId: id,
  });

  return NextResponse.json({}, { status: 201 });
}
