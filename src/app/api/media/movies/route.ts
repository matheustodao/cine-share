import { parsedQuery } from 'core/parsedQuery';

import { NextResponse } from 'next/server';
import { getMoviesUseCase } from 'server/modules/media/getMovies';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const query = parsedQuery(req.url);

    const response = await getMoviesUseCase({
      ...query,
      language: query?.language || 'pt-BR',
    });

    return NextResponse.json(response.data);
  } catch (err: any) {
    return NextResponse.json(err.data, { status: err.status });
  }
}
