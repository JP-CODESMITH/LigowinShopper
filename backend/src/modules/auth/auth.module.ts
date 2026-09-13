import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaModule } from '../../config/prisma.module';

@Module({
  imports: [
    PassportModule,

    // Configure JWT module with secret and expiry from environment variables.
    // The `!` assertion is safe here because .env is loaded before the app starts.
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          // Cast to any because @nestjs/jwt's StringValue type doesn't
          // accept plain strings — but '7d' is valid JWT expiresIn syntax.
          expiresIn: configService.get('JWT_EXPIRES_IN', '7d') as any,
        },
      }),
    }),

    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
