// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IStakeVault
 * @notice Interface for the main staking vault contract
 */
interface IStakeVault {
    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    event RewardsHarvested(uint256 amount);
    
    function deposit(uint256 amount) external;
    function withdraw(uint256 amount) external;
    function getBalance(address user) external view returns (uint256);
    function getTotalStaked() external view returns (uint256);
}

