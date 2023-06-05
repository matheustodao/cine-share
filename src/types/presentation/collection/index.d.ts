import { InputHTMLAttributes } from 'react';
import { MediaParamsData } from 'types/server/media';
import { IChildren } from '../core';

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

export interface CheckboxElementProps extends InputHTMLAttributes<HTMLInputElement>, IChildren {
  isChecked: boolean
  label: string
}
