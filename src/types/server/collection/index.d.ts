import { Collection } from '@prisma/client';

export type CollectionParams = Collection;

export type CollectionParamsData = Pick<Collection, 'name' | 'description' | 'userId'>;
