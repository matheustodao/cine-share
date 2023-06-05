import { MediaType } from '@prisma/client';
import { SkeletonProps } from 'react-loading-skeleton';

export interface CineCardProps {
  id: string,
  title: string,
  image: string,
  original_language: string
  type: MediaType
}

export interface CineCardLoaderProps {
  count?: number,
  wrapper?: SkeletonProps['wrapper']
}
