import { z } from 'zod';

export const validationSchemaLogin = z.object({
  email: z.string().nonempty({ message: 'Campo obrigatório' }),
  password: z.string().nonempty({ message: 'Campo obrigatório' }),
});

export type SchemaLogin = z.infer<typeof validationSchemaLogin>;
