// Roles decorator — attaches role requirements to route handlers.
// Used with RolesGuard to enforce that only users with specific roles
// can access the decorated route.
//
// Usage:
//   @Roles(Role.ADMIN)
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Get('admin-only')
//   adminEndpoint() { ... }

import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

// ROLES_KEY is the metadata key used to store required roles.
// RolesGuard reads this key to determine what roles a route needs.
export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
