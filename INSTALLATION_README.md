# Solidity-Hardhat-Framework INSTALLATION

We are going to use the documentation of hardhat: https://hardhat.org/docs

Starting with Installation:

**First of all**, Node.js have to be installed in our computer. We can check it by using this code on our terminal: 
```
node -v
```

* If not, you can install [here](https://nodejs.org/en/download/)
---
We are going to use **Visual Studio Code**. If you haven't installed, use [here](https://code.visualstudio.com/download)

1. We create a folder in VSCode.
2. We are going to use this commands:

##Starting the Node Project
```
    npm init --yes
```
**Installation of Hardhat**
```
    npm install --save-dev hardhat
```
**Selecting the Structure of the Working Environment by Running Hardhat (we want to learn, so: 'Create an empty hardhat.config.js')**
```
    npx hardhat
```

**Creating our folders by using terminal.**
```
    mkdir contracts test scripts
```

**Installation of Required Plugins (Ethers.js, Waffle)**
```
    npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```
---

**Configuring the file that: `hardhat.config.js`**
```
    //require("@nomiclabs/hardhat-ethers");
    require("@nomiclabs/hardhat-waffle");

    module.exports = {
        solidity: "0.8.9",
    };
```
