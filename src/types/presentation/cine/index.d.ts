import { MediaType } from '@prisma/client';
import { WrapperImageProps } from 'presentation/components/CineCard/styles';
import { SkeletonProps } from 'react-loading-skeleton';

export interface CineCardProps {
  id: string,
  title: string,
  image: string,
  original_language: string
  type: MediaType
  cardSize?: WrapperImageProps['size']
  userEmail?: string | null
  onDelete?: () => void
}

export interface CineCardLoaderProps {
  count?: number,
  wrapper?: SkeletonProps['wrapper']
}
