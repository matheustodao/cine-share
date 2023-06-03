import 'next-auth';

interface UserInfo {
  id: string,
  name: string,
  email: string
}

declare module 'next-auth' {
  interface Session {
    user: UserInfo
  }
}

declare module 'next-auth/jwt/types' {
  interface JWT extends UserInfo { }
}
