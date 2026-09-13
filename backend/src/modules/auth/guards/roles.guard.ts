// RolesGuard — checks if the authenticated user has the required role(s).
// Works with the @Roles() decorator to enforce role-based access control.
// Example: @Roles(Role.ADMIN) on a route means only admins can access it.

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { ROLES_KEY } from '../../../common/decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Get the required roles from the @Roles() decorator metadata.
    // If no @Roles() decorator is present, allow access (no role restriction).
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    // Get the user object that was attached by JwtStrategy.validate()
    const { user } = context.switchToHttp().getRequest();

    // Check if the user's role is in the list of required roles
    return requiredRoles.some((role) => user?.role === role);
  }
}
