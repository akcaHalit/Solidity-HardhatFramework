//require("@nomiclabs/hardhat-ethers"); //waffle includes ethers so we don't need to import ethers.
require("@nomiclabs/hardhat-waffle");

//const PRIVATE_KEY = "PRIVATE_KEY";

// if we are gonna transact on mainnet, PRIVATE_KEY variable should be our private key
module.exports = {
    solidity: "0.8.24",
    networks: {
      mainnet: {
        url: `https://api.avax.network/ext/bc/C/rpc`,
          //accounts: [`${PRIVATE_KEY}`]
      },
      fuji: {
        url: `https://api.avax-test.network/ext/bc/C/rpc`,
          //accounts: [`${PRIVATE_KEY}`]  
      }
    }
};
 