import { PrismaClient } from '@prisma/client';

// @ts-ignore-next-line
const prisma = global.prisma || new PrismaClient();

// @ts-ignore-next-line
if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export default prisma;
