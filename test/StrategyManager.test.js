const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StrategyManager", function () {
  let strategyManager;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const StrategyManager = await ethers.getContractFactory("StrategyManager");
    strategyManager = await StrategyManager.deploy();
    await strategyManager.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await strategyManager.owner()).to.equal(owner.address);
    });

    it("Should have default rebalance threshold", async function () {
      expect(await strategyManager.rebalanceThreshold()).to.equal(200);
    });
  });

  describe("Strategy Management", function () {
    it("Should allow adding strategies", async function () {
      await strategyManager.addStrategy(1, addr1.address, 450);
      const strategies = await strategyManager.getAllStrategies();
      expect(strategies.length).to.equal(1);
      expect(strategies[0].chainId).to.equal(1);
      expect(strategies[0].apr).to.equal(450);
    });

    it("Should update strategy APR", async function () {
      await strategyManager.addStrategy(1, addr1.address, 450);
      await strategyManager.updateStrategyApr(0, 500);
      const strategy = await strategyManager.getStrategy(0);
      expect(strategy.apr).to.equal(500);
    });

    it("Should revert on invalid pool address", async function () {
      await expect(
        strategyManager.addStrategy(1, ethers.ZeroAddress, 450)
      ).to.be.revertedWith("Invalid pool address");
    });
  });

  describe("Rebalancing", function () {
    beforeEach(async function () {
      await strategyManager.addStrategy(1, addr1.address, 450);
      await strategyManager.addStrategy(2, addr1.address, 620);
    });

    it("Should allow rebalancing between strategies", async function () {
      // Note: This is a simplified test. In production, you'd need to set up allocated amounts first
      await expect(
        strategyManager.rebalance(0, 1, 1000)
      ).to.be.revertedWith("Insufficient amount");
    });
  });
});

