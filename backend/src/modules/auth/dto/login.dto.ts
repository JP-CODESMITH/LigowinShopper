// LoginDto — validates incoming login requests.
// Email is required and must be valid format.
// Password is a plain string — comparison happens in AuthService.

import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}
