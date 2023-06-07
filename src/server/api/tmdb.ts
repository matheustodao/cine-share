import axios from 'axios';

import { tmdbConfigs } from 'server/config/tmdb';

export const tmdbApi = axios.create({
  baseURL: tmdbConfigs.uri,
  params: {
    api_key: tmdbConfigs.apiKey,
  },
});
