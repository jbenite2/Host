// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       id: "credentials",
//       name: "credentials",
//       type: "credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         email: { label: "email", type: "email", placeholder: "shelby@gmail.com" },
//         password: { label: "password", type: "password", placeholder: "********" }
//       },
//       async authorize(credentials, req) {
//         const response = await fetch("/login/", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(credentials),
//         });
//         if (response.status === 200) {
//           const data = await response.json();
//           return data;
//         }
//         return null;
//       }
//     }),
//   ],
// })
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      type: "credentials",
      credentials: {},
      authorize: async (credentials, req) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // // find user from db
        // if (response.status !== 200) {
        //   throw new Error("Invalid username or password");
        // }
        // // if everything is fine
        // const user = { email, password };
        // return user;
        return { id: "1", email, password };
      }
    })
  ]
};

export default (req, res) => NextAuth(req, res, authOptions);
