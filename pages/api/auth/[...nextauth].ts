import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { checkHashValue } from "../../../utils/encryptUtils";

const prisma = new PrismaClient();

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;

        const user = await prisma.user.findFirst({
          where: {
            email: username,
          },
        });

        if (!user) {
          throw new Error("No user found");
        }

        const passwordValid = await checkHashValue(password, user.password);

        if (!passwordValid) {
          throw new Error("Password is incorrect");
        }

        return {
          name: "Felipe Ruiz",
          email: user.email,
        };
      },
    }),
  ],
});
