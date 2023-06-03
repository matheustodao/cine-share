'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export function LoginUI() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<any>) {
    e.preventDefault();
    await signIn('credentials', {
      redirect: false,
      email: e.currentTarget?.email.value,
      password: e.currentTarget?.password.value,
    });

    router.push('/');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button type="submit">Logar</button>
    </form>
  );
}
