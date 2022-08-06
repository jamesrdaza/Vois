import prisma from "../../../../lib/prisma";
import bcrypt from "bcrypt";

export default async function handle(req, res) {

    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })
    let sesh;
    bcrypt.compare(password, user.hash, async function (err, result) {
        if (result === true) {
            let currentDate = Date.now();
            let expireDate = new Date(currentDate + 30 * 60000);
            let expireDateISO = expireDate.toISOString();
            sesh = await prisma.session.create({
                data: {
                    userId: user.id,
                    expires: expireDateISO
                }
            })
            res.statusCode = 200;
            res.send({ sessionToken: sesh.sessionToken });
        }
        else {
            res.statusCode = 403;
            res.json({ ERR: "CREDENTIALS NOT VALID" });
        }

    });
}