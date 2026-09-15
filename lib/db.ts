import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
};

/**
 * Resolve the connection string, tolerating the name the hosting provider
 * actually used.
 *
 * Vercel's Neon integration prefixes every variable it creates with the store
 * name, this project gets `tnses_DATABASE_URL`, not `DATABASE_URL`. The
 * schema's `env("DATABASE_URL")` then resolves to nothing and Prisma fails with
 * "Environment variable not found: DATABASE_URL". Checking the prefixed and
 * Vercel-Postgres names here means the app runs whichever way the variables are
 * provisioned, instead of depending on someone renaming them by hand.
 */
const resolveDatabaseUrl = () =>
    process.env.DATABASE_URL ||
    process.env.tnses_DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.tnses_POSTGRES_PRISMA_URL ||
    undefined;

const createClient = () => {
    const url = resolveDatabaseUrl();

    // Passing the URL explicitly bypasses the schema's env() lookup. When none
    // is found we fall through to Prisma's own error, which names the variable.
    return new PrismaClient(url ? { datasourceUrl: url } : undefined);
};

export const db = globalThis.prisma || createClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
