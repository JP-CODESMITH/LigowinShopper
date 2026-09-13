import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const connected = await this.prisma.ensureConnected();
    if (!connected) return [];

    try {
      return await this.prisma.category.findMany({
        orderBy: { name: 'asc' },
      });
    } catch (error) {
      this.logger.warn('Categories query failed');
      return [];
    }
  }

  async findOne(id: string) {
    const connected = await this.prisma.ensureConnected();
    if (!connected) return null;

    try {
      return await this.prisma.category.findUnique({
        where: { id },
        include: { products: true },
      });
    } catch (error) {
      this.logger.warn('Category query failed');
      return null;
    }
  }
}
