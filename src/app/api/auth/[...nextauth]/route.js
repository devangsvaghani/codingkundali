import axios from "axios";
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
      
        try{
          const userExist = await axios.post(
            `${process.env.DOMAIN_URL}/api/user/loginUser`,
            {
              email: email,
              image: image,
            }
          );

          if (!userExist || userExist.data.success === false) {
            return false;
          }
          
          return true;
        }
        catch(e){
          console.log("Error is");
          console.log(e);
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
