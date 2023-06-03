import { Media } from '@prisma/client';

export type MediaParams = Media;

export type MediaParamsData = Omit<MediaParams, 'id'>;

export interface MediaParamsDeleteData {
  // collectionId: string,
  mediaId: string,
}
