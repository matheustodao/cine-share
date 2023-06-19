export function parsedQuery<T = Record<string, any>>(url: string): T {
  const { searchParams } = new URL(url);
  return Object.fromEntries(searchParams.entries()) as T;
}
