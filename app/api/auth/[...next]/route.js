import NextAuth  from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"


const handler =  NextAuth[{

    provider: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    async session({session}){

    },
    async signIn({profile}){
        try {
            
        } catch (error) {
            
        }
    }
}]

export default handler;