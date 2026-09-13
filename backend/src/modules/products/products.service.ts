import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(category?: string, search?: string) {
    const connected = await this.prisma.ensureConnected();
    if (!connected) return [];

    try {
      const where: any = { active: true };

      if (category && category !== 'all') {
        where.category = { slug: category };
      }

      if (search) {
        where.OR = [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ];
      }

      return await this.prisma.product.findMany({
        where,
        include: { category: true, images: true },
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      this.logger.warn('Products query failed');
      return [];
    }
  }

  async findOne(id: string) {
    const connected = await this.prisma.ensureConnected();
    if (!connected) return null;

    try {
      return await this.prisma.product.findUnique({
        where: { id },
        include: { category: true, images: true },
      });
    } catch (error) {
      this.logger.warn('Product query failed');
      return null;
    }
  }
}
