import { AxiosResponse } from 'axios';
import { cineShareApi } from 'infra/api/cineShareApi';
import { ResponsesCollection } from 'types/server/collection';

export async function getCollectionById(
  collectionId: string,
): Promise<AxiosResponse<ResponsesCollection> | null> {
  try {
    return await cineShareApi.get(`/collection/${collectionId}`);
  } catch {
    return null;
  }
}
