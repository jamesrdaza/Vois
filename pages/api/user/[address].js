import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import prisma from "../../../lib/prisma"

export default handler = async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions)
    if (session) {
        if (req.method === "GET") {
            let user = await prisma.user.findUnique({

            })
        }
        console.log("Session", JSON.stringify(session, null, 2))
    } else {
        res.status(401)
    }
    res.end()
}