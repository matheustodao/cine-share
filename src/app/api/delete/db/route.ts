import { parsedQuery } from 'core/parsedQuery';
import { prisma } from 'core/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  const queries = parsedQuery(req.url);

  if (!queries?.password || queries.password !== process.env.PASSWORD_ADM_DELETE_DB) {
    return NextResponse.json({
      error: 'missing password param or password incorrect',
    }, { status: 400 });
  }

  Promise.allSettled([
    await prisma.media.deleteMany(),
    await prisma.collection.deleteMany(),
    await prisma.user.deleteMany(),
  ]);

  return NextResponse.json({}, { status: 201 });
}
