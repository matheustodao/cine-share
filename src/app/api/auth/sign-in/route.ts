import { NextResponse } from 'next/server';
import { authenticateUserUseCase } from 'server/modules/auth/sign-in/authenticateUser';
import { AuthParams } from 'types/server/auth';

export async function POST(req: Request) {
  const { email, password }: AuthParams = await req.json();

  if (!email || !password) {
    return NextResponse.json({
      error: 'Email or password field is missing',
    }, { status: 400 });
  }

  const userData = await authenticateUserUseCase({ email, password });

  if (!userData) {
    return NextResponse.json({
      error: 'Email or password is wrongs',
    }, { status: 400 });
  }

  return NextResponse.json(userData);
}
