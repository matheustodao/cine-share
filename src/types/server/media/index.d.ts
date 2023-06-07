import { Media } from '@prisma/client';

export type MediaParams = Media;

export type MediaParamsData = Omit<MediaParams, 'id' | 'collectionId'> & {
  userId: string,
  collectionId: string[]
};

export interface MediaParamsDeleteData {
  userId: string,
  collectionId: string,
  mediaId: string,
}
