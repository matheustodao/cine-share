import { useNavHandler } from 'core/handler/components/Nav';

export function useNavModel() {
  const models = useNavHandler();

  return models;
}
