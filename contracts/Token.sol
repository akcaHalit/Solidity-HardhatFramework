// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// We're going to call the ERC20 functions.
contract BEEToken is ERC20 {
        constructor() ERC20("BEE Token", "BEE") {
            // We will create a supply by calling the mint function of the Token. (TR: Token'in mint fonksiyonunu çağırarak bir arz oluşturucaz.)
            _mint(msg.sender, 1773000*10**decimals()); //Solidity'de kesirli sayı yok Tokenlerin ve Etherlerin yanında 18 adet olur.
            
        }
}