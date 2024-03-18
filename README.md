#  Solidity-Hardhat-Framework 

Firstly, USE THE [INSTALLATION_README.md](https://github.com/akcaHalit/Solidity-HardhatFramework/blob/main/INSTALLATION_README.md) to install Hardhat and prepare the project to develop.

## Preparing the `hardhat.config.js`
```
    //require("@nomiclabs/hardhat-ethers");
    require("@nomiclabs/hardhat-waffle");

    const PRIVATE_KEY = "PRIVATE_KEY";

    module.exports = {
        solidity: "0.8.2",
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
```

## Installation of the OpenZeppelin Contracts
```
    npm install @openzeppelin/contracts
```
    
