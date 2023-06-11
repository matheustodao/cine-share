import { useEffect, useMemo, useState } from 'react';
import {
  useQueries,
} from 'react-query';

import { useTranslation } from 'app/i18n';
import { usePathname } from 'next/navigation';
import { getMovies } from '../../getMovies';
import { getTvShows } from '../../getTvShows';

import { moviesRawQueries } from './constant/movies.constant';
import { tvShowsRawQueries } from './constant/tvShows.constant';

const queryOptions = {
  cacheTime: 60 * 60 * 60 * 2,
};

export function useHomeMediaQueries() {
  const [enabled, setEnabled] = useState(true);
  const { t } = useTranslation();
  const pathname = usePathname();

  const moviesTitles = useMemo(() => t('home.moviesTitles', { returnObjects: true }), [t]);
  const tvShowsTitles = useMemo(() => t('home.tvShowsTitles', { returnObjects: true }), [t]);

  const moviesQueries = useQueries(
    moviesRawQueries.map((movie) => ({
      queryKey: ['movies', movie.key],
      queryFn: async () => getMovies({ ...movie?.params, language: pathname.split('/')[1] }),
      ...queryOptions,
      enabled,
    })),
  );

  const tvShowsQueries = useQueries(
    tvShowsRawQueries.map((show) => ({
      queryKey: ['tv_shows', show.key],
      queryFn: () => getTvShows({ ...show.params, language: pathname.split('/')[1] }),
      ...queryOptions,
      enabled,
    })),
  );

  const tvShows = useMemo(() => tvShowsQueries.map((show, index) => ({
    title: tvShowsTitles[index],
    isLoading: show.isLoading,
    data: show.data?.results,
  })), [tvShowsQueries, tvShowsTitles]);

  const movies = useMemo(() => moviesQueries.map((show, index) => ({
    title: moviesTitles[index],
    isLoading: show.isLoading,
    data: show.data?.results,
  })), [moviesQueries, moviesTitles]);

  useEffect(() => {
    if (enabled) {
      setEnabled(false);
    }
  }, []);

  return {
    movies,
    tvShows,
  };
}
