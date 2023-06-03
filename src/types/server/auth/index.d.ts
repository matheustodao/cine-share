import { User } from '@prisma/client';

export interface UserParams extends User { }

export type UserParamsData = Omit<UserParams, 'collection' | 'id' | 'created_at'>;

export interface AuthParams {
  email: string
  password: string
}
