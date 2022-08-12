
import prisma from "../lib/prisma.js"
async function getCollections() {
    let collections = await fetch("https://api.opensea.io/api/v1/collections?offset=0&limit=50")
    return collections
}

async function putDB(item) {

}

let collections = getCollections();

for (const collection in collections["collections"]) {
    prisma.project.create({
        data: {
            projectName: collection.name,
            contractAddress: collection.primary_asset_contracts.length > 0 ? collection.primary_asset_contracts[0].address : uuid(),
            ownerAddress: collection.payout_address
        }
    })
}