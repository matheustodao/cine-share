import { SkeletonProps } from 'react-loading-skeleton';

export interface CineCardProps {
  id: string,
  title: string,
  image: string,
}

export interface CineCardLoaderProps {
  count?: number,
  wrapper?: SkeletonProps['wrapper']
}
