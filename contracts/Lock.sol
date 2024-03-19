// Kodlar ITU Blockchain eğitiminden öğrenilmiştir.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Token.sol";

contract Lock{
    BEEToken Token;
    uint256 public lockerCount; //How many people locked the token?
    uint256 public totalLocked; //The balance of the token inside.
    mapping(address => uint256) public lockers;     // locker'lar kullanıcılar
    

    constructor(address tokenAddress){
        Token = BEEToken(tokenAddress);   
    }

    function lockTokens(uint256 amount) external{
        require(amount>0,"Token Amount must be bigger than Zero!");                     // Can't be 0
        // These are provided from ERC20
        //require(Token.balanceOf(msg.sender) >= amount,"Insufficient Balance!");         // Can't be bigger than Balance
        //require(Token.allowance(msg.sender, address(this)) >= amount,"Insufficient Allowence"); // User should have more allowence 
        
        if(!(lockers[msg.sender] > 0))    lockerCount += 1;            // User's First lock or has no balance.
        totalLocked += amount;
        lockers[msg.sender] += amount;

        bool transferOk = Token.transferFrom(msg.sender, address(this), amount);      // ERC20 Function
        require(transferOk,"Transfer Failed!");        

    }
    
    function withdrawTokens() external{
        require(lockers[msg.sender] > 0 ,"Not Enough Token!");
        uint256 amount = lockers[msg.sender];
        delete(lockers[msg.sender]);        //  Prevent to reentrancy
        totalLocked -= amount;
        lockerCount--;
        require(Token.transfer(msg.sender, amount),"Transfer Failed!");

    }
}



/*                  BURASI DERS ANLATIM:

***Daha önceden yazdığımız ether transfer metodlarında, 
    Ether fonksiyonlara dahili bir mesaj olarak bir değer olarak iletiliyor.    
    Tokenları herhangi bir fonksiyonda ANA VARLIK olarak gönderemezsin.

***mint() => Bir hesap defteri tutmak gibi işliyor.  Ahmet'in 10 tokeni var Osman'ın 5 tokeni var Ahmet 1-> Osman:   Ahmet'ten 1 çıkar Osman'a 1 ekle.

***Şimdi, Contract'a para göndericez Bizimki 1 azalıcak Contract'ınki 1 artıcak
Peki Nasıl Gönderiyoruz?    OpenZeppelin ERC20 fonksiyonlarında:
1- transfer() fonksiyonu:  ** Birine(Kontrata) doğrudan tek mesaj olarak token gönderiyorsun.    Harici akıllı kontratlarla etkileşemez
2- transferFrom() fonksiyonu:  ** Birine Allowance verdiğimizde o kişi ya da kontrat senin tokenini harcama yetkisi oluyor.
                               ** DEX, DEFi uygulamaları kullanırkenki 'Approve' fonksiyonudur aslında
                               Bunu bir kişiye yaparsan senin adına istediği yere transfer ettirebilir.
                               Bunu bir kontrata yaparsan o kontrat nasıl kodlandıysa tokeni ona göre hareket ettirebilir.
Yani aslında bir kullanıcı gelip token kilitlemek istediğinde önce approve edicek ki, o kontrat gidip o kişinin adına tokenları alabilsin ve işlemleri yapabilsin.

*** Eğer bir akıllı kontratta başka bir kontrat ile etkileşiyorsak, 
    * Her zaman, kontratın içerisinde yapılması gereken değişiklikleri yaptıktan sonra dışarıyla etkileşmeliyiz => yoksa reentrancy attack'ına açık bırakmış oluruz.



 */