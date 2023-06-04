import { MediaParamsData } from 'types/server/media';

export interface CollectionModalCreateProps {
  onClose: () => {},
  visible: boolean
}

export interface CollectionCardProps {
  title: string
  countMedia: number | string
  owner: string
}

export interface SetMediaCollectionModalProps extends Pick<CollectionModalCreateProps, 'onClose' | 'visible'> {
  media?: Pick<MediaParamsData, 'tmdb_id' | 'type'>
}
