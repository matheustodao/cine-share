import { ReactNode } from 'react';
import { TMDBMedia } from 'types/server/tmdb';

export interface MediaSwiperProps {
  title: string,
  link: string,
  media: TMDBMedia[],
  loading?: boolean,
  media_type: TMDBMedia['media_type']
}

export interface MediaSwiperListProps {
  children: ReactNode
}
