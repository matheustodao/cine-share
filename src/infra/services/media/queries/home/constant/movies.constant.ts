import { QueriesContent } from 'types/infra';
import { DiscoverMovieQueryParams } from 'types/server/tmdb';

export const moviesRawQueries: QueriesContent<DiscoverMovieQueryParams>[] = [
  {
    key: 'release',
  },

  {
    key: 'animation',
    params: { with_genres: 16 },
  },

  {
    key: 'comedy',
    params: { with_genres: 35 },
  },

  {
    key: 'horror',
    params: { with_genres: 27 },
  },

  {
    key: 'adventure',
    params: { with_genres: 12 },
  },
];

export const moviesTitles = [
  'Filmes em lançamentos',
  'Animações',
  'Filmes de comédias',
  'Filmes de terror',
  'Filmes de aventura',
];
