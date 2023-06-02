import { Collection, User } from '@prisma/client';

export type CollectionParams = Collection;

export interface UserParams extends Omit<User, 'collection'> {
  collection: CollectionParams[]
}

export type UserParamsData = Omit<UserParams, 'collection' | 'id' | 'created_at'>;
