const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const tokenAddress = "0x3d3212874efB3E770597716d72518c9649FBDAA6";

module.exports = buildModule("ExchangeModule", (m) => {
  const exchange = m.contract("Exchange",[tokenAddress]);

  return { exchange }; 
});

// MyTokenModule#MyToken - 0x3d3212874efB3E770597716d72518c9649FBDAA6
// ExchangeModule#Exchange - 0xD5Cdc282BE2e7762Ce9f13684B9430910a38357e