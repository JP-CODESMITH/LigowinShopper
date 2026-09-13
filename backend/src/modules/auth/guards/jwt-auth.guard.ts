// JwtAuthGuard — protects routes that require authentication.
// Extends Passport's built-in AuthGuard('jwt') which:
// 1. Extracts the Bearer token from the Authorization header
// 2. Verifies it using JwtStrategy
// 3. Attaches the user object to request.user
// 4. Throws UnauthorizedException if token is missing/invalid

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
