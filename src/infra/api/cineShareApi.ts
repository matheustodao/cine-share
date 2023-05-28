import axios from 'axios';
import { getBaseUrl } from 'core/getBaseURL';

export const cineShareApi = axios.create({
  baseURL: `${getBaseUrl()}/api`,
});
