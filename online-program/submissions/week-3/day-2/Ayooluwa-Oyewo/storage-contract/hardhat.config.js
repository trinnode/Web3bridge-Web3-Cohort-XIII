require("@nomicfoundation/hardhat-toolbox");

const { vars } = require("hardhat/config"); // npx hardhat vars set KEYS

const ACCOUNTS = vars.has("PRIVATE_KEY") ? [vars.get("PRIVATE_KEY")] : [];
const ETHERSCAN_API_KEY = vars.has("ETHERSCAN_API_KEY") ? vars.get("ETHERSCAN_API_KEY") : "";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "lisk-sepolia",
  networks: {
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: ACCOUNTS,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
