import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { contractAddress } = req.query;
        let project = await prisma.project.findUnique({
            where: {
                contractAddress: contractAddress
            }
        });
        res.send(project);
    } else {
        res.status = 403;
        res.send({ ERR: "Invalid Request" });
    }
}