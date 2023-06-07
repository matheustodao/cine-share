export function parsedQuery(url: string) {
  const { searchParams } = new URL(url);
  return Object.fromEntries(searchParams.entries());
}
