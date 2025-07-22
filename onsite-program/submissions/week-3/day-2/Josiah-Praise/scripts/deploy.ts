import { ethers } from "hardhat";


async function main() {
  const MyContract = await ethers.getContractFactory("Storage");
  const tx = await MyContract.deploy();

  console.log("Waiting for deployment...");
  const receipt = await tx.deploymentTransaction()?.wait();

  console.log("Deployed to:", await tx.getAddress());
  console.log("Transaction hash:", tx.deploymentTransaction()?.hash);
  console.log("Gas used:", receipt?.gasUsed.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
