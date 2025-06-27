import { PrismaClient } from "@prisma/client/extension";

const globalPrismaClient = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalPrismaClient.prisma ?? new PrismaClient();
if (globalPrismaClient.prisma) {
  console.log("prisma client exits");
}

if (process.env.NODE_ENV !== "production") globalPrismaClient.prisma = prisma;
