// AuthController — handles HTTP requests for authentication endpoints.
// Each method maps to a route that the frontend can call.
// Uses DTOs for input validation and AuthService for business logic.

import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST /auth/register — create a new user account.
  // Accepts: { email, name, password }
  // Returns: { user: { id, email, name, role }, token: "jwt..." }
  @Post('register')
  register(@Body() dto: RegisterDto): Promise<{ user: { id: string; email: string; name: string; role: string }; token: string }> {
    return this.authService.register(dto);
  }

  // POST /auth/login — authenticate an existing user.
  // Accepts: { email, password }
  // Returns: { user: { id, email, name, role }, token: "jwt..." }
  @Post('login')
  login(@Body() dto: LoginDto): Promise<{ user: { id: string; email: string; name: string; role: string }; token: string }> {
    return this.authService.login(dto);
  }

  // GET /auth/me — get the current user's profile.
  // Requires a valid JWT token in the Authorization header.
  // The JwtAuthGuard extracts and verifies the token, then attaches
  // the user object to request.user via JwtStrategy.validate().
  @Get('me')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req: { user: { id: string } }): Promise<{ id: string; email: string; name: string; role: string }> {
    return this.authService.getProfile(req.user.id);
  }
}
