pragma solidity ^0.8.19;

import "./Token.sol";

contract Lock{
    BEEToken Token;
    constructor(address tokenAddress){
        Token = BEEToken(tokenAddress);   
    }
}