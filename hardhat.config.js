require("@nomicfoundation/hardhat-toolbox");
require('@parity/hardhat-polkadot');

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  resolc: {
        version: "1.5.2",
        compilerSource: 'npm',
    },
    networks: {
        hardhat: {
            polkavm: true,
            nodeConfig: {
                nodeBinaryPath: './bin/substrate-node',
                dev: true,
                rpcPort: 8000
            },
            adapterConfig: {
                adapterBinaryPath: './bin/eth-rpc',
                dev: true,
            },
        },
    localNode: {
      polkavm: true,
      url: `http://127.0.0.1:8545`,
    },
    passetHub: {
      polkavm: true,
      url: 'https://testnet-passet-hub-eth-rpc.polkadot.io',
      accounts: [process.env.PRIVATE_KEY],
    },
    }
};
