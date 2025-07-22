// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GreeterModule = buildModule("GreeterModuleModule", (m) => {


  const greeter = m.contract("Greeter")

  return { greeter };
});

export default GreeterModule;
