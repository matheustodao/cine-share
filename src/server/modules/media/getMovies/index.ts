// import { tmdbApi } from 'server/api/tmdb';
import { DiscoverMovieQueryParams } from 'types/server/tmdb';

import mockMedia from 'mock/media.json';

export async function getMoviesUseCase(options?: DiscoverMovieQueryParams) {
  // return tmdbApi.get('/discover/movie', {
  //   params: options,
  // });
  console.log({ movie: options });

  return { data: mockMedia };
}
