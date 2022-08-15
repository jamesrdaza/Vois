import prisma from "../../../lib/prisma";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getCsrfToken } from "next-auth/react"
import { SiweMessage } from "siwe"

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

                    // Check if nextauth url exists
                    const nextAuthUrl = process.env.NEXTAUTH_URL;
                    if (!nextAuthUrl) {
                        return null
                    }

                    // Check if domain is the same (From protocol)
                    const nextAuthHost = new URL(nextAuthUrl).host
                    if (siwe.domain !== nextAuthHost) {
                        return null
                    }

                    // Check nonce (From Protocol)
                    if (siwe.nonce !== (await getCsrfToken({ req }))) {
                        return null
                    }

                    // Check signature
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
                    const sessionInfo = {
                        id: userData.id,
                        address: userData.address
                    };

                    return (sessionInfo);
                } catch (e) {
                    console.error(e);
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
                    token.sessionInfo = user;
                }
                return token
            },
            async session({ session, token }) {
                // Must pass through jwt first to pass to session
                if (token.userData) {
                    session.sessionInfo = token.sessionInfo;
                    /* console.log(session); */
                }
                return session
            },
        },
    })
}