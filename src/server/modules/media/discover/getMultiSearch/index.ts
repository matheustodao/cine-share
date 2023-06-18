import { tmdbApi } from 'server/api/tmdb';
import { TMDBMultiSearchQuery } from 'types/server/tmdb';

export async function getMultiSearchUseCase(options?: TMDBMultiSearchQuery) {
  return tmdbApi.get('/search/multi', {
    params: options,
  });
}
