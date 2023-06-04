import { z } from 'zod';
import { zodLocales } from '../locales';

export const validationSchemaLogin = z.object({
  email: z.string().email(zodLocales.emailInvalid).nonempty(zodLocales.required),
  password: z.string().nonempty(zodLocales.required),
});

export type SchemaLogin = z.infer<typeof validationSchemaLogin>;
