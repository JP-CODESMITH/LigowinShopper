// JwtStrategy — Passport strategy that validates JWT tokens from requests.
// Runs on every request to a @UseGuards(JwtAuthGuard) protected route.
// Extracts the token from the Authorization: Bearer <token> header,
// verifies it with the JWT_SECRET, and attaches the user payload to the request.

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// The shape of data stored inside each JWT token.
// "sub" is the user ID (standard JWT convention).
export interface JwtPayload {
  sub: string;
  email: string;
  role: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const secret = configService.get<string>('JWT_SECRET');
    if (!secret) {
      throw new UnauthorizedException('JWT_SECRET is not configured');
    }

    super({
      // Extract token from the Authorization: Bearer <token> header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Reject expired tokens
      ignoreExpiration: false,
      // Secret key used to verify the token signature
      secretOrKey: secret,
    });
  }

  // Called after token is verified. The return value is attached to request.user.
  // We return the payload so downstream code can access user ID, email, and role.
  async validate(payload: JwtPayload) {
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}
