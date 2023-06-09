import { parsedQuery } from 'core/parsedQuery';
import { NextResponse } from 'next/server';
import { getTvShowsUseCase } from 'server/modules/media/getTvShows';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const query = parsedQuery(req.url);

  try {
    const response = await getTvShowsUseCase({
      ...query,
      language: query?.language || 'pt-BR',
    });

    return NextResponse.json(response.data);
  } catch (err: any) {
    return NextResponse.json(err.data, { status: err.status });
  }
}
