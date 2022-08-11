import prisma from "../lib/prisma";
import bcrypt from "bcrypt";

export default async function handle(req, res) {

    const { username, password } = req.body;
    const saltRounds = 10;
    let result;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
        try {
            result = await prisma.user.create({
                data: {
                    username: username,
                    hash: hash
                }
            })
            res.send({ account: "Successfully Created" });
        } catch {
            res.send({ account: "User Already Exists" });
        }
    });

}