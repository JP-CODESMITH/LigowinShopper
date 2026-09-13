// RegisterDto — validates incoming registration requests.
// Uses class-validator decorators to enforce input rules.
// The ValidationPipe in main.ts will reject any request that doesn't match.
// The `!` non-null assertion is used because class-validator populates
// these fields at runtime, not via the constructor.

import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(2)
  name!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}
