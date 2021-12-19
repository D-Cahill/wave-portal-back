require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'STAGING_ALCHEMY_KEY',
      accounts: ['3eb6ce6a746bf44dad27164520d91f59714d89b3e12093c6f46567543ec862ad'],
    },
  },
};