function deployContract(contract, account){
  var web3 = require('web3');
  //var fs = require('fs');


  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  console.log("Compiling contract..")

  var contractObj = eth.compile.solidity(contract).test;

  console.log(contractObj.toString());

  var evmCode = contractObj.code;
  console.log(evmCode);

  var testStr = JSON.stringify(contractObj.info);

  console.log(testStr)

  var filePath = "/Users/jainanavati/Documents/tmp/contractAddress.txt";

  var jsonABI = JSON.parse(JSON.stringify(contractObj.info.abiDefinition));
  console.log(jsonABI);
  MyContract = eth.contract(jsonABI);
  MyContract.new({from: account, data: evmCode}, function(err, contract) {
    if (!err && contract.address)
      console.log(contract.address);
    else
      console.log('Contract creation transaction failed');

      //fs.writeFile(filePath, contract.address);
  });

}
