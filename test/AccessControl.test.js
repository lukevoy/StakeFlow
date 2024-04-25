const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AccessControl", function () {
  let accessControl;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const AccessControl = await ethers.getContractFactory("AccessControl");
    accessControl = await AccessControl.deploy();
    await accessControl.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should grant admin role to deployer", async function () {
      const ADMIN_ROLE = await accessControl.ADMIN_ROLE();
      expect(await accessControl.hasRole(ADMIN_ROLE, owner.address)).to.be.true;
    });
  });

  describe("Role Management", function () {
    it("Should allow admin to grant roles", async function () {
      const OPERATOR_ROLE = await accessControl.OPERATOR_ROLE();
      await accessControl.grantRole(OPERATOR_ROLE, addr1.address);
      expect(await accessControl.hasRole(OPERATOR_ROLE, addr1.address)).to.be.true;
    });

    it("Should allow admin to revoke roles", async function () {
      const OPERATOR_ROLE = await accessControl.OPERATOR_ROLE();
      await accessControl.grantRole(OPERATOR_ROLE, addr1.address);
      await accessControl.revokeRole(OPERATOR_ROLE, addr1.address);
      expect(await accessControl.hasRole(OPERATOR_ROLE, addr1.address)).to.be.false;
    });

    it("Should revert when non-admin tries to grant role", async function () {
      const OPERATOR_ROLE = await accessControl.OPERATOR_ROLE();
      await expect(
        accessControl.connect(addr1).grantRole(OPERATOR_ROLE, addr2.address)
      ).to.be.revertedWith("AccessControl: insufficient permissions");
    });
  });
});

