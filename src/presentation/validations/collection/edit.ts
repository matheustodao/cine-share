import { z } from 'zod';
import { validationSchemaCreateCollection } from './create';

export const validationSchemaEditCollection = z.object({})
  .merge(validationSchemaCreateCollection)
  .partial();

export type SchemaEditCollection = z.infer<typeof validationSchemaEditCollection>;
