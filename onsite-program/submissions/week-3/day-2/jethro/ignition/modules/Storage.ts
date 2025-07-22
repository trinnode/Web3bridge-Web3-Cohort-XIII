import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StorageModule = buildModule("GreeterModule", (m) => {
  const storage = m.contract("Greeter"); // no constructor arguments

  return { storage };
});

export default StorageModule;