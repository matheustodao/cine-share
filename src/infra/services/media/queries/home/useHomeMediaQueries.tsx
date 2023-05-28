import { useMemo } from 'react';
import {
  useQueries,
} from 'react-query';

import { getMovies } from '../../getMovies';
import { getTvShows } from '../../getTvShows';

import { moviesRawQueries, moviesTitles } from './constant/movies.constant';
import { tvShowsRawQueries, tvShowsTitles } from './constant/tvShows.constant';

const queryOptions = {
  cacheTime: 60 * 60 * 5,
};

export function useHomeMediaQueries() {
  const moviesQueries = useQueries(
    moviesRawQueries.map((movie) => ({
      queryKey: ['movies', movie.key],
      queryFn: async () => getMovies(movie.params),
      ...queryOptions,
    })),
  );

  const tvShowsQueries = useQueries(
    tvShowsRawQueries.map((show) => ({
      queryKey: ['tv_shows', show.key],
      queryFn: () => getTvShows(show?.params),
      ...queryOptions,
    })),
  );

  const tvShows = useMemo(() => tvShowsQueries.map((show, index) => ({
    title: tvShowsTitles[index],
    isLoading: show.isLoading,
    data: show.data?.results,
  })), [tvShowsQueries]);

  const movies = useMemo(() => moviesQueries.map((show, index) => ({
    title: moviesTitles[index],
    isLoading: show.isLoading,
    data: show.data?.results,
  })), [moviesQueries]);

  return {
    movies,
    tvShows,
  };
}
