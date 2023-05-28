import { ReactNode } from 'react';
import { TMDBMovie } from 'types/server/tmdb';

export interface MediaSwiperProps {
  title: string,
  link: string,
  media: TMDBMovie[],
  loading?: boolean,
}

export interface MediaSwiperListProps {
  children: ReactNode
}
