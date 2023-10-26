// all of this use for when production we dont want hot reload to detect when we changing code so 
// just let it detect hot reload when development by using global because hot reload wouldn't detect on global

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
