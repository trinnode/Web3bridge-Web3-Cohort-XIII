// import { HardhatUserConfig } from 'hardhat/config'
// import '@nomicfoundation/hardhat-toolbox'
// // import dotenv from 'dotenv'

// // Load environment variables
// // dotenv.config()

// const { PRIVATE_KEY, ETHERSCAN_API_KEY, LISK_RPC_URL } = process.env

// const config: HardhatUserConfig = {
//   solidity: '0.8.28',
//   networks: {
//     sepolia: {
//       url: 'https://rpc.api.lisk.com',
//       accounts: [`0x${PRIVATE_KEY}`]
//     }
//   },
//   etherscan: {
//     apiKey: ETHERSCAN_API_KEY
//   }
// }

// export default config

import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
// import dotenv from 'dotenv'

// dotenv.config()
require('dotenv').config()

const { PRIVATE_KEY, ETHERSCAN_API_KEY, LISK_RPC_URL } = process.env

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    sepolia: {
      url: LISK_RPC_URL || '',
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : []
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY || ''
  }
}

export default config
