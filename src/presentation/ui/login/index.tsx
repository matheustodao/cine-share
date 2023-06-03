'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from 'presentation/components/Button';
import { Input } from 'presentation/components/Form/Input';
import { Title } from 'presentation/components/Typography/Title';
import { FormEvent, useState } from 'react';
import { Container, Form } from './styles';

export function LoginUI() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<any>) {
    try {
      setLoading(true);

      e.preventDefault();
      await signIn('credentials', {
        redirect: false,
        email: e.currentTarget?.email.value,
        password: e.currentTarget?.password.value,
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

      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="email" name="email" />
        <Input type="password" placeholder="password" name="password" />
        <Button type="submit" loading={loading}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
