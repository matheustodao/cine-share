import { tmdbApi } from 'server/api/tmdb';
import { DiscoverTVQueryParams } from 'types/server/tmdb';

export async function getTvShowsUseCase(options?: DiscoverTVQueryParams) {
  return tmdbApi.get('/discover/tv', {
    params: {
      ...options,
    },
  });
}
