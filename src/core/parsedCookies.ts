export type CookieParams = Record<string, string>;

export function parsedCookies(rawCookies: string): CookieParams {
  const cookies: CookieParams = {};

  rawCookies?.split(';').forEach((cookieString) => {
    const [key, value] = cookieString.split('=');

    if (typeof key === 'undefined' || typeof value === 'undefined') {
      return;
    }

    Object.assign(cookies, {
      [decodeURIComponent(key.trim())]: decodeURIComponent(value.trim()),
    });
  });

  return cookies;
}
