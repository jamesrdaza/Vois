import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    if (req.method === "GET") {
        let projects = await prisma.project.findMany();
        res.send(projects);
    } else {
        res.status = 403;
        res.send({ ERR: "Invalid Request" });
    }

}