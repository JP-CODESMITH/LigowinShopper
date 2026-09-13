import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../prisma/contract.d";
import contractJson from "../prisma/contract.json" with { type: "json" };

const globalForPrisma = globalThis as unknown as {
  db: ReturnType<typeof postgres<Contract>> | undefined;
};

export const db =
  globalForPrisma.db ??
  postgres<Contract>({
    contractJson,
    url: process.env["DATABASE_URL"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;
