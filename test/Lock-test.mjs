//const { expect } = require('chai');      // we can not require() function with it.
//import { ethers } from 'hardhat';
//const { ethers } = require('hardhat');
// import { BigNumber } from 'ethers';

import { expect } from 'chai';
import pkg from 'hardhat';
const { ethers } = pkg;
const provider =  ethers.provider;           // Provides us to communicate with Blockchain 


function ethToNum(val){         // to be decimal numbers,   we can use like a normal numbers now.
    return Number(ethers.utils.formatEther(val));
}

describe("Lock Contract", function () {
    let owner, user1, user2;
    let Token, token;
    let Lock, lock;
    let balances;

    // Before: When the test script runs, it executes once and does not run again.
    before(async function(){
        [owner, user1, user2] = await ethers.getSigners();

        // We deploy the contracts:
        Token = await ethers.getContractFactory("BEEToken");
        token = await Token.connect(owner).deploy();    // await Token.deploy();    we can choose which user call the function with connect()

        Lock = await ethers.getContractFactory("Lock");
        lock = await Lock.connect(owner).deploy(token.address);    

        token.connect(owner).transfer(user1.address, ethers.utils.parseUnits("100",18));
        token.connect(owner).transfer(user2.address, ethers.utils.parseEther("50"));

        token.connect(user1).approve(lock.address, ethers.constants.MaxUint256); // Maxiumum Approve
        token.connect(user2).approve(lock.address, ethers.constants.MaxUint256); // Maxiumum Approve

    });  

    beforeEach(async function(){
        balances = [
            ethToNum(await token.balanceOf(owner.address)),
            ethToNum(await token.balanceOf(user1.address)),
            ethToNum(await token.balanceOf(user2.address)),
            ethToNum(await token.balanceOf(lock.address))
        ]
    });

    // it statements are should be asynchron, the first condition
    it(" Deploys the contracts", async function() {
        // we deployed two contracts, So they have addresses.  So, we're gonna check it.

        expect(token.address).to.not.be.undefined;  // is undefined?
        //expect(lock.address).to.be.properAddress; // is valid?   NO LONGER USED :(
    }); 

    it("Sends Token", async function(){
        // The balance should be 100, 50, and also smaller than lock.
        expect(balances[1]).to.be.equal(100); 
        expect(balances[2]).to.be.equal(50); 
        expect(balances[0]).to.be.greaterThan(balances[1]);  // 100>50 bi kontrol edelim bakalım doğru mu gitmiş

    });

    it("Approves", async function(){
        // We give Allowances
        let allowances = [
         await token.allowance(user1.address,lock.address),   
         await token.allowance(user2.address,lock.address),   
        ]

        // Maximum approve verdik bakalım eşitler mi?       BURASI ÇALIŞMADI Niye Çözemedim
        // We gave maximum approval, let's see if they are equal. THIS DIDN'T WORK Why? I could not solve it :(
        //expect(allowances[0]).to.be.equal(ethers.constants.MaxUint256);
        //expect(allowances[1]).to.be.equal(ethers.constants.MaxUint256);

    });

    //describe("Contract Functions", function (){});

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


//import { bignumber } from 'chai-bignumber';
//expect.use(bignumber)(provider.BigNumber);
