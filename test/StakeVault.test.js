const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StakeVault", function () {
  let stakeVault;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const StakeVault = await ethers.getContractFactory("StakeVault");
    stakeVault = await StakeVault.deploy();
    await stakeVault.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await stakeVault.owner()).to.equal(owner.address);
    });

    it("Should have zero total staked initially", async function () {
      expect(await stakeVault.getTotalStaked()).to.equal(0);
    });
  });

  describe("Deposits", function () {
    it("Should allow deposits", async function () {
      await stakeVault.connect(addr1).deposit(1000);
      expect(await stakeVault.getBalance(addr1.address)).to.equal(1000);
    });

    it("Should update total staked after deposit", async function () {
      await stakeVault.connect(addr1).deposit(1000);
      expect(await stakeVault.getTotalStaked()).to.equal(1000);
    });

    it("Should revert on zero deposit", async function () {
      await expect(
        stakeVault.connect(addr1).deposit(0)
      ).to.be.revertedWith("Amount must be greater than 0");
    });
  });

  describe("Withdrawals", function () {
    beforeEach(async function () {
      await stakeVault.connect(addr1).deposit(1000);
    });

    it("Should allow withdrawals", async function () {
      await stakeVault.connect(addr1).withdraw(500);
      expect(await stakeVault.getBalance(addr1.address)).to.equal(500);
    });

    it("Should revert on insufficient balance", async function () {
      await expect(
        stakeVault.connect(addr1).withdraw(2000)
      ).to.be.revertedWith("Insufficient balance");
    });
  });
});

