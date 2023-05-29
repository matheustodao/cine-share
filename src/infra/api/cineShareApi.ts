import axios from 'axios';
import { NEXT_PUBLIC_NEXT_URL } from 'infra/config/env';

export const cineShareApi = axios.create({
  baseURL: `${NEXT_PUBLIC_NEXT_URL}/api`,
});
