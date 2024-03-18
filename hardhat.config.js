//require("@nomiclabs/hardhat-ethers"); //waffle includes ethers so we don't need to import ethers.
require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = "PRIVATE_KEY";


module.exports = {
    solidity: "0.8.24",
    networks: {
      mainnet: {
        url: `https://api.avax.network/ext/bc/C/rpc`,
          accounts: [`${PRIVATE_KEY}`]
      },
      fuji: {
        url: `https://api.avax-test.network/ext/bc/C/rpc`,
          accounts: [`${PRIVATE_KEY}`]
      }
    }
};