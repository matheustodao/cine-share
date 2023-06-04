import { MediaParamsData } from 'types/server/media';

export interface CollectionModalCreateProps {
  onClose: () => void,
  visible: boolean
}

export interface CollectionCardProps {
  title: string
  countMedia: number | string
  owner: string
}

export interface SetMediaCollectionModalProps extends Pick<CollectionModalCreateProps, 'onClose' | 'visible'> {
  media?: Omit<MediaParamsData, 'userId' | 'collectionId'>
}
