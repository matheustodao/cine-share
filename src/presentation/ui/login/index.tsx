'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button } from 'presentation/components/Button';
import { Input } from 'presentation/components/Form/Input';
import { Link } from 'presentation/components/Link';
import { Title } from 'presentation/components/Typography/Title';

import { FormGroup } from 'presentation/components/Form/Group';
import { SchemaLogin, validationSchemaLogin } from 'presentation/validations/auth/login';
import { useTranslation } from 'app/i18n';
import { Container, Form } from './styles';

export function LoginUI() {
  const router = useRouter();
  const { register, formState: { isValid, errors }, handleSubmit } = useForm<SchemaLogin>({
    resolver: zodResolver(validationSchemaLogin),
    mode: 'onBlur',
  });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('common');

  async function handleSignIn(data: SchemaLogin) {
    try {
      setLoading(true);

      const response = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (response?.error) {
        return toast.error(t('feedback.invalidCredentials'), { position: 'bottom-center' });
      }

      router.push('/');
    } finally {
      setLoading(false);
    }
  }
  return (
    <Container>
      <Title as="h1" size="xxl" weight="semi">
        {t('signIn.title')}
      </Title>

      <Form onSubmit={handleSubmit(handleSignIn)} noValidate>
        <FormGroup errorMessage={errors?.email?.message}>
          <Input
            type="email"
            placeholder={t('signIn.field.email.label')}
            {...register('email')}
          />
        </FormGroup>

        <FormGroup errorMessage={errors?.password?.message}>
          <Input type="password" placeholder="**************" {...register('password')} />
        </FormGroup>

        <div className="actions">
          <Button type="submit" loading={loading} disabled={!isValid}>
            {t('signIn.cta.submit')}
          </Button>

          <Link href="/sign-up" isoutline="true" schemacolor="softGray">
            {t('signIn.cta.signUp')}
          </Link>
        </div>
      </Form>
    </Container>
  );
}
