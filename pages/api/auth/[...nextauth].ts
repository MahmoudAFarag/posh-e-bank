import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        },
      });

      if (dbUser?.admin === true) {
        user.admin = true;
      } else {
        user.admin = false;
      }

      return true;
    },

    session: async ({ user, session }) => {
      session.admin = user.admin;

      return session;
    },
  },
});
