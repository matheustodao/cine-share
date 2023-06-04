import { ReactNode } from 'react';
import { TMDBMovie, TMDBMultiSearch } from 'types/server/tmdb';

export interface MediaSwiperProps {
  title: string,
  link: string,
  media: (TMDBMovie[] | TMDBMultiSearch[]),
  loading?: boolean,
  media_type: TMDBMultiSearch['media_type']
}

export interface MediaSwiperListProps {
  children: ReactNode
}
