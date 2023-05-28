import { cineShareApi } from 'infra/api/cineShareApi';
import { DiscoverMovieQueryParams } from 'types/server/tmdb';

export async function getMovies(options?: DiscoverMovieQueryParams) {
  console.log(options);
  return (await cineShareApi.get('/media/movies', {
    params: options,
  })).data;
}
