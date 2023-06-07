import bcrypt from 'bcrypt';

class CryptImpl {
  salt: number;

  constructor() {
    this.salt = 10;
  }

  async hash(text: string) {
    const hashed = await bcrypt.hash(text, 10);

    return hashed;
  }

  async compare(hashed: string, raw: string) {
    const isValid = await bcrypt.compare(raw, hashed);

    return isValid;
  }
}

export const crypt = new CryptImpl();
