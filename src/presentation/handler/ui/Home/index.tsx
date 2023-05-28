import { useHomeMediaQueries } from 'infra/services/media/queries/home/useHomeMediaQueries';

export function useHomeHandler() {
  const queries = useHomeMediaQueries();
  return {
    queries,
  };
}
