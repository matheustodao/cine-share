import { CookieParams, parsedCookies } from './parsedCookies';

interface HeadersParams extends Record<string, unknown> {
  authorization: string,
  cookie: CookieParams
  'content-type': string,
  userid: string,
}

export function parsedHeaders(rawHeaders: Headers): HeadersParams {
  const headers = Object.fromEntries(rawHeaders.entries());

  const parseCookies = parsedCookies(String(headers?.cookie) ?? '');

  return {
    ...headers,
    cookie: parseCookies,
  } as HeadersParams;
}
