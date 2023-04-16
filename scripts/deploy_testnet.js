const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    const NAME = "My AI NFT"
    const SYMBOL = "AINFT"
    const COST = ethers.utils.parseUnits("0.00000000000000001", "ether") // 1 ETH

    const NFT = await hre.ethers.getContractFactory("NFT")
    const nft = await NFT.deploy(NAME, SYMBOL, COST)
    await nft.deployed()

    console.log(`Deployed NFT Contract at Sepolia Testnet: ${nft.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
