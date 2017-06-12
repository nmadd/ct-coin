var ConvertLib = artifacts.require("./ConvertLib.sol");
var CTCoin = artifacts.require("./CTCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, CTCoin);
  deployer.deploy(CTCoin);
};
