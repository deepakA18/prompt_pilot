import NextAuth  from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

import {connectToDB} from "@utils/database"
import User from "@models/user";


const handler =  NextAuth[{

    provider: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    async session({session}){
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();

        return session;
    },
    async signIn({profile}){
        try {
            await connectToDB();

            const user = await User.findOne({email: profile.email});

            if(!user)
            {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" "," "),
                    image: profile.picture
                })
            }
        } catch (error) {
            
        }
    }
}]

export {handler as GET, handler as POST};