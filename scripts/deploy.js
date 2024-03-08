const hre = require("hardhat");

async function main() {
  console.log("Deploying StakeVault contract...");

  const StakeVault = await hre.ethers.getContractFactory("StakeVault");
  const stakeVault = await StakeVault.deploy();

  await stakeVault.waitForDeployment();

  const address = await stakeVault.getAddress();
  console.log(`StakeVault deployed to: ${address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

