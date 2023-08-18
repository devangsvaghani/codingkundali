import User from "@/models/User";
import { connect } from "mongoose";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        const { name, email, image } = user;

        try {
          await connect();
          const user = await User.findOne({ email: email });
          
          if (!user) {
            return false;
          }

          user.avatar = image;
          await user.save();

          return true;
        } catch (e) {
          return false;
        }
      }
    },
  },

  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
