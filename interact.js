const { ethers } = require ( "ethers");
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1ac57d7b1c854245a2cf21abda2489cc")

async function main() {
    const wallet = new ethers.Wallet.createRandom() // create random  address method 
    const balance = await provider.getBalance("0x62B5dD146aBDe6c9cFB48f14E6dcd143EB568c66");  // get balance method 
    const blocknumber = await provider.getBlockNumber();   // get block number methof
    console.log(`current block balance ${ethers.utils.formatEther(balance)}`);
     console.log(` address----->${wallet.address}`)
  
}

 main();
 