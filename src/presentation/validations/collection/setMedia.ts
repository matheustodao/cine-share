import { z } from 'zod';

export const validationSchemaSetMediaIntoCollection = z.object({
  collections: z.string().array(),
});

export type SchemaSetMediaIntoCollection = z.infer<typeof validationSchemaSetMediaIntoCollection>;
