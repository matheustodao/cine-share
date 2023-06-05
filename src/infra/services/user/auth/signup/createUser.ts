import { AxiosResponse } from 'axios';
import { cineShareApi } from 'infra/api/cineShareApi';
import { UserParams, UserParamsData } from 'types/server/auth';

export async function createUser({
  name, email, password,
}: UserParamsData): Promise<AxiosResponse<UserParams>> {
  return cineShareApi.post('/auth/sign-up', {
    name, email, password,
  });
}
