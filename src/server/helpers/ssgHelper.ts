
import { prisma } from "~/server/db";
import superjson from "superjson";
import { appRouter } from "~/server/api/root";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";

export const generateSSGHelper  = () => 
  createProxySSGHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
  });
