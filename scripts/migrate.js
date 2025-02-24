const hre = require("hardhat");

async function main() {
  console.log("Starting migration...");

  // Deploy StakeVault
  console.log("Deploying StakeVault...");
  const StakeVault = await hre.ethers.getContractFactory("StakeVault");
  const stakeVault = await StakeVault.deploy();
  await stakeVault.waitForDeployment();
  const vaultAddress = await stakeVault.getAddress();
  console.log(`StakeVault deployed to: ${vaultAddress}`);

  // Deploy StrategyManager
  console.log("Deploying StrategyManager...");
  const StrategyManager = await hre.ethers.getContractFactory("StrategyManager");
  const strategyManager = await StrategyManager.deploy();
  await strategyManager.waitForDeployment();
  const managerAddress = await strategyManager.getAddress();
  console.log(`StrategyManager deployed to: ${managerAddress}`);

  // Deploy RewardDistributor
  console.log("Deploying RewardDistributor...");
  const RewardDistributor = await hre.ethers.getContractFactory("RewardDistributor");
  const rewardDistributor = await RewardDistributor.deploy(vaultAddress);
  await rewardDistributor.waitForDeployment();
  const distributorAddress = await rewardDistributor.getAddress();
  console.log(`RewardDistributor deployed to: ${distributorAddress}`);

  // Configure contracts
  console.log("Configuring contracts...");
  await stakeVault.setStrategyManager(managerAddress);
  console.log("StakeVault configured");

  // Save deployment addresses
  const addresses = {
    StakeVault: vaultAddress,
    StrategyManager: managerAddress,
    RewardDistributor: distributorAddress,
    network: hre.network.name,
    timestamp: new Date().toISOString()
  };

  console.log("\n=== Deployment Complete ===");
  console.log(JSON.stringify(addresses, null, 2));
  console.log("===========================\n");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

