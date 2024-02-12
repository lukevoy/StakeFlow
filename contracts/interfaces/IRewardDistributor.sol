// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IRewardDistributor
 * @notice Interface for reward distribution and compounding logic
 */
interface IRewardDistributor {
    event RewardsClaimed(address indexed user, uint256 amount);
    event RewardsCompounded(uint256 amount);
    
    function claimRewards() external returns (uint256);
    function compoundRewards() external;
    function getPendingRewards(address user) external view returns (uint256);
    function setCompoundInterval(uint256 interval) external;
}

