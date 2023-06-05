import { cineShareApi } from 'infra/api/cineShareApi';
import { CollectionParamsData } from 'types/server/collection';

export async function createCollection({ name, description }: Omit<CollectionParamsData, 'userId'>) {
  await cineShareApi.post('/collection', {
    name, description,
  });
}
