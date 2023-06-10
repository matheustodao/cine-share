import { AxiosResponse } from 'axios';
import { cineShareApi } from 'infra/api/cineShareApi';
import { ResponsesCollection } from 'types/server/collection';

export async function indexUserCollection(): Promise<AxiosResponse<ResponsesCollection[]> | null> {
  try {
    const response = await cineShareApi.get('/collection/user');

    return response;
  } catch {
    return null;
  }
}
