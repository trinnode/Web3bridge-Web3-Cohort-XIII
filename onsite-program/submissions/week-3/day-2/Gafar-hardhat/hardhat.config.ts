import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { SEPOLIA_URL_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.30",
  networks: {
    'lisk-sepolia': {
      url: SEPOLIA_URL_KEY,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 1000000000,
    },
  }
};

export default config;
