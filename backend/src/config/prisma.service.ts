import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private connected = false;
  private connectPromise: Promise<void> | null = null;

  async ensureConnected(): Promise<boolean> {
    if (this.connected) return true;
    if (this.connectPromise) {
      await this.connectPromise;
      return this.connected;
    }

    this.connectPromise = (async () => {
      try {
        const connectPromise = this.$connect();
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Connection timeout')), 3000),
        );
        await Promise.race([connectPromise, timeoutPromise]);
        this.connected = true;
        this.logger.log('Database connected');
      } catch {
        this.logger.warn('Database connection failed — running without DB');
      }
    })();

    await this.connectPromise;
    this.connectPromise = null;
    return this.connected;
  }

  async onModuleDestroy() {
    if (this.connected) {
      await this.$disconnect();
    }
  }
}
