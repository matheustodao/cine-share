'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from 'presentation/components/Button';
import { Input } from 'presentation/components/Form/Input';
import { Link } from 'presentation/components/Link';
import { Title } from 'presentation/components/Typography/Title';

import { FormGroup } from 'presentation/components/Form/Group';
import { SchemaLogin, validationSchemaLogin } from 'presentation/validations/auth/login';
import { Container, Form } from './styles';

export function LoginUI() {
  const router = useRouter();
  const { register, formState: { isValid, errors }, handleSubmit } = useForm<SchemaLogin>({
    resolver: zodResolver(validationSchemaLogin),
    mode: 'onBlur',
  });
  const [loading, setLoading] = useState(false);

  async function handleSignIn(data: SchemaLogin) {
    try {
      setLoading(true);

      await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      router.push('/');
    } finally {
      setLoading(false);
    }
  }
  return (
    <Container>
      <Title as="h1" size="xxl" weight="semi">
        Login
      </Title>

      <Form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup errorMessage={errors?.email?.message}>
          <Input type="email" placeholder="Email" {...register('email')} />
        </FormGroup>

        <FormGroup errorMessage={errors?.password?.message}>
          <Input type="password" placeholder="**************" {...register('password')} />
        </FormGroup>

        <div className="actions">
          <Button type="submit" loading={loading} disabled={!isValid}>
            Entrar
          </Button>

          <Link href="/sign-up" isoutline="true" schemacolor="softGray">
            Cadastrar
          </Link>
        </div>
      </Form>
    </Container>
  );
}
