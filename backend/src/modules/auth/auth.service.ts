// AuthService — handles all authentication logic.
// Provides methods for registering users, logging in, and fetching profiles.
// Uses bcryptjs for password hashing and @nestjs/jwt for token generation.

import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../config/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // Register a new user account.
  async register(dto: RegisterDto) {
    const connected = await this.prisma.ensureConnected();
    if (!connected) {
      throw new Error('Database not available');
    }

    // Check for existing user with this email
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException('Email already registered');
    }

    // Hash the password before storing it.
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Create the user record
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        password: hashedPassword,
      },
    });

    // Generate JWT token for the new user
    const token = this.generateToken(user);

    return {
      user: this.sanitizeUser(user),
      token,
    };
  }

  // Authenticate an existing user.
  async login(dto: LoginDto) {
    const connected = await this.prisma.ensureConnected();
    if (!connected) {
      throw new Error('Database not available');
    }

    // Find the user by email
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Compare the provided password with the stored bcrypt hash.
    const passwordValid = await bcrypt.compare(dto.password, user.password);

    if (!passwordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Generate JWT token for the authenticated user
    const token = this.generateToken(user);

    return {
      user: this.sanitizeUser(user),
      token,
    };
  }

  // Get a user's profile by ID.
  async getProfile(userId: string) {
    const connected = await this.prisma.ensureConnected();
    if (!connected) {
      throw new Error('Database not available');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.sanitizeUser(user);
  }

  // Generate a JWT access token for a user.
  private generateToken(user: { id: string; email: string; role: string }): string {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }

  // Remove the password hash from user data before sending to client.
  private sanitizeUser(user: { id: string; email: string; name: string; role: string }) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
  }
}
