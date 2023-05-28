import { URLSearchParams } from 'url';

export function parsedQuery(searchParams: URLSearchParams) {
  return Object.fromEntries(searchParams.entries());
}
