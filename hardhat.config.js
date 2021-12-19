require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/oCeKBYTGtElFJ9OqXvF3f5GAWhC88UNP',
      accounts: ['3eb6ce6a746bf44dad27164520d91f59714d89b3e12093c6f46567543ec862ad'],
    },
  },
};