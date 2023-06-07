import { Collection } from '@prisma/client';
import { UserParams } from '../auth';
import { MediaParams } from '../media';

export type CollectionParams = Collection;

export type CollectionParamsData = Pick<Collection, 'name' | 'description' | 'userId'>;

export interface ResponsesCollection extends Omit<CollectionParams, 'created_at' | 'updated_at' | 'userId'> {
  media: MediaParams[],
  user: Pick<UserParams, 'id' | 'name', 'email'>,
  _count: {
    media: number
  }
}
