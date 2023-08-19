require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0', //version of the solidity smart contract
  networks: {
    ropsten: {
      url: '// testnet api key', 
      accounts: ['private key'],
    },
  },
};