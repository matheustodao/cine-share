import { Collection } from '@prisma/client';
import { UserParams } from '../auth';
import { MediaParams } from '../media';

export type CollectionParams = Collection;

export type CollectionParamsData = Pick<Collection, 'name' | 'description' | 'userId'>;

export interface ResponsesGetCollectionUseCase extends Omit<CollectionParams, 'created_at' | 'updated_at' | 'userId'> {
  media: Omit<MediaParams, 'type'>[],
  user: Pick<UserParams, 'id' | 'name'>,
  _count: {
    media: number
  }
}
