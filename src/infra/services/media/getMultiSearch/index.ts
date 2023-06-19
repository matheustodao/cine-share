import { cineShareApi } from 'infra/api/cineShareApi';
import { ResponseTMDBMultiSearch, TMDBMultiSearchQuery } from 'types/server/tmdb';

export async function getMultiSearch(
  options?: TMDBMultiSearchQuery,
): Promise<ResponseTMDBMultiSearch> {
  return (await cineShareApi.get('/media/discover/multi', {
    params: options,
  })).data;
}
