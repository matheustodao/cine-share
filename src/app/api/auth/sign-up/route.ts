import { NextResponse } from 'next/server';
import { createUserUseCase } from 'server/modules/auth/sign-up/createUser';
import { UserParamsData } from 'types/server/auth';

export async function POST(req: Request) {
  const { email, name, password }: UserParamsData = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({
      error: 'Name, email or passoword field is missing',
    }, { status: 400 });
  }

  const userCreated = await createUserUseCase({ email, name, password });

  return NextResponse.json(userCreated);
}
