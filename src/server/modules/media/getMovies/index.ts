import { tmdbApi } from 'server/api/tmdb';
import { DiscoverMovieQueryParams } from 'types/server/tmdb';

export async function getMoviesUseCase(options?: DiscoverMovieQueryParams) {
  return tmdbApi.get('/discover/movie', {
    params: options,
  });
}
