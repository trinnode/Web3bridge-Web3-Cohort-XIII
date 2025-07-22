// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const storageModule = buildModule("GreeterModule", (m) => {
  const storage = m.contract("storage");
  return { storage };
});

export default storageModule;
