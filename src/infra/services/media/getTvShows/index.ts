import { cineShareApi } from 'infra/api/cineShareApi';
import { DiscoverMovieQueryParams } from 'types/server/tmdb';

export async function getTvShows(options?: DiscoverMovieQueryParams) {
  return (await cineShareApi.get('/media/tv', {
    params: options,
  })).data;
}
