import { ReactNode } from 'react';
import { CineCardProps } from 'types/presentation/components/cine';

export interface MediaSwiperProps {
  title: string,
  link: string,
  media: CineCardProps[],
  loading?: boolean,
}

export interface MediaSwiperListProps {
  children: ReactNode
}
