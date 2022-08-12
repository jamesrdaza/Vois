import prisma from "../../../lib/prisma";

export default async function handler(req, res) {

    if (process.env.NODE_ENV === 'production') return res.status(404).end();



    async function getCollections(offset = 0) {
        let collections = await fetch(`https://api.opensea.io/api/v1/collections?offset=${offset}&limit=300`)

        return await collections.json()
    }

    async function putDB() {
        let offset = 300;
        for (let i = 0; i < 50; i++) {
            let collections = await getCollections(offset * i);
            collections["collections"].forEach(async (collection) => {
                if (collection.banner_image_url !== null && collection.primary_asset_contracts.length > 0) {
                    console.log(collection.name, collection.primary_asset_contracts.length);
                    let temp = await prisma.project.create({
                        data: {
                            projectName: collection.name,
                            description: collection.description ? collection.description : "",
                            contractAddress: collection.primary_asset_contracts.length > 0 ? collection.primary_asset_contracts[0].address : Math.floor(Math.random() * 99999999999999).toString(),
                            ownerAddress: collection.payout_address ? collection.payout_address : Math.floor(Math.random() * 99999999999999).toString(),
                            imageUrl: collection.image_url,
                            bannerUrl: collection.banner_image_url
                        }
                    })
                }
            })
        }
    }

    putDB();
}