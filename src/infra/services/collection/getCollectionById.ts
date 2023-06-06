import { AxiosResponse } from 'axios';
import { cineShareApi } from 'infra/api/cineShareApi';
import { ResponsesCollection } from 'types/server/collection';

export async function getCollectionById(
  collectionId: string,
): Promise<AxiosResponse<ResponsesCollection | null>> {
  return cineShareApi.get(`/collection/${collectionId}`);
}
