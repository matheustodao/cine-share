import { parsedQuery } from 'core/parsedQuery';
import { NextResponse } from 'next/server';
import { getMultiSearchUseCase } from 'server/modules/media/discover/getMultiSearch';
import { TMDBMultiSearchQuery } from 'types/server/tmdb';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const query = parsedQuery<TMDBMultiSearchQuery>(req.url);

  try {
    const response = await getMultiSearchUseCase({
      ...query,
      language: query?.language || 'pt-BR',
    });

    return NextResponse.json(response.data);
  } catch (err: any) {
    return NextResponse.json(err.data, { status: err.status });
  }
}
