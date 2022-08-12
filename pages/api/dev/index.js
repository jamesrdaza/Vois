import prisma from "../../../lib/prisma";

export default async function handler(req, res) {

    if (process.env.NODE_ENV === 'production') return res.status(404).end();



    async function getCollections() {
        let collections = await fetch("https://api.opensea.io/api/v1/collections?offset=0&limit=50")

        return await collections.json()
    }

    async function putDB() {
        let collections = await getCollections();
        collections["collections"].forEach(async (collection) => {
            console.log("ENDDDDD")
            console.log(collection.name);
            console.log("ENDDDDD")
            let temp = await prisma.project.create({
                data: {
                    projectName: collection.name,
                    description: collection.description ? collection.description : "",
                    contractAddress: collection.primary_asset_contracts.length > 0 ? collection.primary_asset_contracts[0].address : Math.floor(Math.random() * 99999999999999).toString(),
                    ownerAddress: collection.payout_address ? collection.payout_address : Math.floor(Math.random() * 99999999999999).toString()
                }
            })
        })

    }

    putDB();
}