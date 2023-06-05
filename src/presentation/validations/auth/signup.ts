import { z } from 'zod';
import { zodLocales } from '../locales';

export const validationSchemaSignUp = z.object({
  name: z.string().nonempty(zodLocales.required),
  email: z.string().email(zodLocales.emailInvalid).nonempty(zodLocales.required),
  password: z.string().nonempty(zodLocales.required),
});

export type SchemaSignUp = z.infer<typeof validationSchemaSignUp>;
