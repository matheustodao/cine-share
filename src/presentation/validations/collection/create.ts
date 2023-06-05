import { z } from 'zod';
import { zodLocales } from '../locales';

export const validationSchemaCreateCollection = z.object({
  name: z.string().max(26, { message: 'Deve conter no máximo 26 caracteres' }).nonempty(zodLocales.required),
  description: z.string().max(440, { message: 'Deve conter no máximo 440 caracteres' }),
});

export type SchemaCreateCollection = z.infer<typeof validationSchemaCreateCollection>;
