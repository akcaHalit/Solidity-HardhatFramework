// import { expect } from 'chai';  // it is a module not the .js, so we can't use like this.
//const { expect } = require('chai');      // we can not require() function with it.
//import { ethers } from 'hardhat';
//const { ethers } = require('hardhat');

import { expect } from 'chai';
import pkg from 'hardhat';
const { ethers } = pkg;
const provider =  ethers.provider;           // Provides us to communicate with Blockchain 

describe("Lock Contract", function () {
    let owner, user1, user2;
    let Token, token;
    let Lock, lock;

    // Before: When the test script runs, it executes once and does not run again.
    before(async function(){
        [owner, user1, user2] = await ethers.getSigners();

        // We deploy the contracts:
        Token = await ethers.getContractFactory("BEEToken");
        token = await Token.connect(owner).deploy();    // await Token.deploy();    we can choose which user call the function with connect()

        Lock = await ethers.getContractFactory("Lock");
        lock = await Lock.connect(owner).deploy(token.address);    
    });  

    // it statements are should be asynchron, the first condition
    it(" Deploys the contracts", async function() {
        // we deployed two contracts, So they have addresses.  So, we're gonna check it.
        expect(token.address).to.not.be.undefined;  // is undefined?
        //expect(lock.address).to.be.properAddress; // is valid?   NO LONGER USED :(

    }); 

    
    //describe("Contract Functions", function (){
    //});

});


    // States:
// It: The code will sequentially test all the it cases within the describe block. Here, we will also specify the conditions for error handling within these trial results.
// Before: When the test script runs, it executes once and does not run again.
// beforeEach: It executes once before every it cases.
// after: After the test script runs and completed, it executes once and does not run again.
// afterEach: It executes once after every it cases.


    // why we define a describe into describe?
// We check the states in test.js are working properly or not.
// We check the functions,contracts are working properly or not.

    // getSigners()
//(ENG): allows us to define a specified number of users and assign them to variables we define.
//TR: Bize belli sayıda birer kullanıcı tanımlayarak kendi tanımladığımız değişkenlere atmamızı sağlar

    // getContractFactory()
//(TR):   Deploy ettiğimiz kontratları adıyla arıyarak bu kontratların bir instance'ını elde edip sonrasında bu kontratlarını onlar üzerinden deploy edebiliyoruz
//(ENG):  We can search for contracts deployed by their name and obtain an instance of these contracts. Afterwards, we can deploy these contracts using these instances.


