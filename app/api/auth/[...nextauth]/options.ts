import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({ clientId: process.env.GITHUB_ID as string, clientSecret: process.env.GITHUB_SECRET as string, }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        })
    ],

    // hl1 custom pages for styling.
    // pages : {
    //     signIn: '/signIn',
    //     signOut: '/signOut',
    //     error: '/error',
    // }

    secret: process.env.NEXTAUTH_SECRET
}