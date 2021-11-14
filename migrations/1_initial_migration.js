const ReadWrite = artifacts.require("ReadWrite");

module.exports = function (deployer) {
  deployer.deploy(ReadWrite);
};
