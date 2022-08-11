import prisma from "../../../lib/prisma";
import { ethers } from "ethers";

// Make more secure with nonce and possibly generating random string
const messageToSign = "In order to verify please sign this message";

export default async function handler(req, res) {
    const { address, signedMessage } = req.body;
    console.log(req.body);

    // Get address from sign request
    let recoveredAddress = ethers.utils.recoverAddress(ethers.utils.hashMessage(messageToSign), signedMessage).toLowerCase();

    // Compare sent address to recovered address
    if (address === recoveredAddress) {
        try {
            // Check for user if !exist create
            const user = await prisma.user.upsert({
                where: {
                    address: address
                },
                update: {
                    address: address
                },
                create: {
                    address: address
                }
            })

            if (!user) {
                throw "Error Verifying/Creating User";
            }

            // Setting expire time for session
            let currentDate = Date.now();
            let expireDate = new Date(currentDate + 120 * 60000);
            let expireDateISO = expireDate.toISOString();
            let expireDateTime = new Date(expireDateISO);

            // Change to upsert
            const sesh = await prisma.session.create({
                data: {
                    address: user.address,
                    expiresAt: expireDateTime,
                }
            })

            if (!sesh) {
                throw "Error Creating Session";
            }
            // Responses
            res.statusCode = 200;
            res.send({ sessionToken: sesh.sessionToken, expiresAt: expireDateTime });
        } catch (err) {
            console.log(err);
            res.statusCode = 500;
            res.json({ ERR: "Something went wrong" });
        }
    } else {
        res.statusCode = 403;
        res.json({ ERR: "SIGNATURE NOT VALID" });
    }
}