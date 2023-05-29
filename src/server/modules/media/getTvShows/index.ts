import { DiscoverTVQueryParams } from 'types/server/tmdb';

import mockMedia from 'mock/media.json';

export async function getTvShowsUseCase(options?: DiscoverTVQueryParams) {
  // return tmdbApi.get('/discover/tv', {
  //   params: {
  //     ...options,
  //   },
  // });
  console.log({ tv: options });

  return {
    data: mockMedia,
  };
}
