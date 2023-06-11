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

import { createUser } from 'infra/services/user/auth/signup/createUser';
import { FormGroup } from 'presentation/components/Form/Group';
import { SchemaSignUp, validationSchemaSignUp } from 'presentation/validations/auth/signup';
import { useTranslation } from 'react-i18next';
import { Container, Form } from './styles';

export function SignUpUI() {
  const router = useRouter();
  const { register, formState: { isValid, errors }, handleSubmit } = useForm<SchemaSignUp>({
    resolver: zodResolver(validationSchemaSignUp),
    mode: 'onBlur',
  });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('common');

  async function handleSignUp(data: SchemaSignUp) {
    try {
      setLoading(true);

      await createUser(data);

      await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      router.push('/');
    } catch {
      toast.error(t('feedback.emailAlreadyInUse'), { position: 'bottom-center' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Title as="h1" size="xxl" weight="semi">
        {t('signUp.title')}
      </Title>

      <Form onSubmit={handleSubmit(handleSignUp)} noValidate>
        <FormGroup errorMessage={errors?.name?.message}>
          <Input
            type="text"
            placeholder={t('signUp.field.name.label')}
            {...register('name')}
          />
        </FormGroup>

        <FormGroup errorMessage={errors?.email?.message}>
          <Input
            type="email"
            placeholder={t('signUp.field.email.label')}
            {...register('email')}
          />
        </FormGroup>

        <FormGroup errorMessage={errors?.password?.message}>
          <Input type="password" placeholder="**************" {...register('password')} />
        </FormGroup>

        <div className="actions">
          <Button type="submit" loading={loading} disabled={!isValid}>
            {t('signUp.cta.submit')}
          </Button>

          <Link href="/login" isoutline="true" schemacolor="softGray">
            {t('signUp.cta.signIn')}
          </Link>
        </div>
      </Form>
    </Container>
  );
}
