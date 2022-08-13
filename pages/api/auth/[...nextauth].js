import prisma from "../../../lib/prisma";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getCsrfToken } from "next-auth/react"
import { SiweMessage } from "siwe"
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export default async function auth(req, res) {
    const providers = [
        CredentialsProvider({
            name: "Ethereum",
            credentials: {
                message: {
                    label: "Message",
                    type: "text",
                    placeholder: "0x0",
                },
                signature: {
                    label: "Signature",
                    type: "text",
                    placeholder: "0x0",
                },
            },
            async authorize(credentials) {
                try {
                    const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"))

                    const nextAuthUrl = process.env.NEXTAUTH_URL;
                    if (!nextAuthUrl) {
                        return null
                    }

                    const nextAuthHost = new URL(nextAuthUrl).host
                    if (siwe.domain !== nextAuthHost) {
                        return null
                    }
                    if (siwe.nonce !== (await getCsrfToken({ req }))) {
                        return null
                    }
                    await siwe.validate(credentials.signature || "");

                    //https://github.com/prisma/docs/issues/640
                    let userData = await prisma.user.upsert({
                        where: {
                            address: siwe.address,
                        },
                        update: {},
                        create: {
                            address: siwe.address
                        },
                    })
                    /* console.log(userData); */

                    return (userData);
                } catch (e) {
                    /*   console.err(e); */
                    return null
                }
            },
        }),
    ]

    const isDefaultSigninPage =
        req.method === "GET" && req.query.nextauth.includes("signin")

    // Hide Sign-In with Ethereum from default sign page
    if (isDefaultSigninPage) {
        providers.pop()
    }

    return await NextAuth(req, res, {
        providers,
        jwt: {
            maxAge: 3600
        },
        session: {
            strategy: "jwt",
        },
        secret: process.env.NEXTAUTH_SECRET,
        callbacks: {
            async jwt({ token, user }) {
                // Gets called multiple times so need to check if user exists
                if (user) {
                    token.userData = user;
                }
                return token
            },
            async session({ session, token }) {
                // Must pass through jwt first to pass to session
                if (token.userData) {
                    session.userData = token.userData;
                    console.log(session);
                }
                return session
            },
        },
    })
}