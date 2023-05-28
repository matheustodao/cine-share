import { QueriesContent } from 'types/infra';
import { DiscoverTVQueryParams } from 'types/server/tmdb';

export const tvShowsRawQueries: QueriesContent<DiscoverTVQueryParams>[] = [
  {
    key: 'us',
    params: { with_origin_country: 'US' },
  },

  {
    key: 'sci-fi&fantasy',
    params: { with_genres: 10765 },
  },

  {
    key: 'drama',
    params: { with_genres: 18 },
  },

  {
    key: 'kr',
    params: { with_origin_country: 'KR' },
  },

  {
    key: 'animes',
    params: { with_origin_country: 'JP|KR|HR', with_genres: 16 },
  },
];

export const tvShowsTitles = [
  'Séries americanas',
  'Séries Sci-Fi & Fantasia',
  'Séries dramáticas',
  'K-drama',
  'Animes',
];
