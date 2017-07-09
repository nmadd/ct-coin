pragma solidity ^0.4.11;

contract CTCoin {
  /*****
  STATE
  *****/
  // banker: public address of contract creator
  address banker;


  // balances: tracks all coin balances
  mapping (address => uint) private balances;

  /*****
  CONSTRUCTOR
  *****/
  function CTCoin() {
    banker = msg.sender;
  }

  /*****
  METHODS
  *****/

  // mintCoins(amount, receiver): 'mint' coins - send amount to address + update balances (only callable by banker)
  function mintCoins(uint amount, address receiver) {
    if(msg.sender != banker) return;
    balances[receiver] += amount;
  }

  // sendCoins(amount, address): send a specific amount of coins to an address + update balances
  function sendCoins(uint amount, address receiver) {
    if(balances[msg.sender] < amount) return;
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
  }

  // getCTCoinBalance(address): (read only) returns amount of CT coins at address
  function getCTCoinBalance(address targetAddress) constant returns (uint _amount){
    if(targetAddress != address(0)) {
      _amount = balances[targetAddress];
    } else {
      _amount = balances[msg.sender];
    }
  }
}
