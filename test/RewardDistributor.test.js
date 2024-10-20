const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RewardDistributor", function () {
  let rewardDistributor;
  let stakeVault;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    
    const StakeVault = await ethers.getContractFactory("StakeVault");
    stakeVault = await StakeVault.deploy();
    await stakeVault.waitForDeployment();

    const RewardDistributor = await ethers.getContractFactory("RewardDistributor");
    rewardDistributor = await RewardDistributor.deploy(await stakeVault.getAddress());
    await rewardDistributor.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the correct stake vault address", async function () {
      expect(await rewardDistributor.stakeVault()).to.equal(await stakeVault.getAddress());
    });

    it("Should set default compound interval", async function () {
      expect(await rewardDistributor.compoundInterval()).to.equal(7 * 24 * 60 * 60);
    });
  });

  describe("Reward Claims", function () {
    it("Should revert when no rewards to claim", async function () {
      await expect(
        rewardDistributor.connect(addr1).claimRewards()
      ).to.be.revertedWith("No rewards to claim");
    });
  });

  describe("Compound Interval", function () {
    it("Should allow owner to set compound interval", async function () {
      const newInterval = 3 * 24 * 60 * 60; // 3 days
      await rewardDistributor.setCompoundInterval(newInterval);
      expect(await rewardDistributor.compoundInterval()).to.equal(newInterval);
    });

    it("Should revert on zero interval", async function () {
      await expect(
        rewardDistributor.setCompoundInterval(0)
      ).to.be.revertedWith("Invalid interval");
    });
  });
});

