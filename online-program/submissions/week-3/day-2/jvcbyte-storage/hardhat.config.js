const { vars } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");
const TEST_API_KEY = vars.get("TEST_API_KEY");
const privateKey1 = vars.get("PRIVATE_KEY_1");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/" + TEST_API_KEY,
      accounts: [privateKey1],
    },
  },

  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    customChains: [
      {
        network: "lisk-sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://rpc.sepolia-api.lisk.com",
          browserURL: "https://sepolia-blockscout.lisk.com",
        },
      },
    ],
  },
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
