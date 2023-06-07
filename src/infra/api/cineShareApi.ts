import axios from 'axios';
import { NODE_ENV } from 'core/configs/env';

const basePath = NODE_ENV === 'development' ? 'http://localhost:3000' : '';

export const cineShareApi = axios.create({
  baseURL: `${basePath}/api`,
});
