// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interfaces/IRewardDistributor.sol";

/**
 * @title RewardDistributor
 * @notice Handles reward distribution and auto-compounding
 */
contract RewardDistributor is IRewardDistributor {
    mapping(address => uint256) private pendingRewards;
    address public owner;
    address public stakeVault;
    uint256 public compoundInterval = 7 days;
    uint256 public lastCompoundTime;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    modifier onlyStakeVault() {
        require(msg.sender == stakeVault, "Only stake vault can call this function");
        _;
    }
    
    constructor(address _stakeVault) {
        owner = msg.sender;
        stakeVault = _stakeVault;
        lastCompoundTime = block.timestamp;
    }
    
    function claimRewards() external override returns (uint256) {
        uint256 amount = pendingRewards[msg.sender];
        require(amount > 0, "No rewards to claim");
        
        pendingRewards[msg.sender] = 0;
        emit RewardsClaimed(msg.sender, amount);
        
        return amount;
    }
    
    function compoundRewards() external override {
        require(
            block.timestamp >= lastCompoundTime + compoundInterval,
            "Compound interval not reached"
        );
        
        lastCompoundTime = block.timestamp;
        emit RewardsCompounded(0);
    }
    
    function getPendingRewards(address user) external view override returns (uint256) {
        return pendingRewards[user];
    }
    
    function setCompoundInterval(uint256 interval) external override onlyOwner {
        require(interval > 0, "Invalid interval");
        compoundInterval = interval;
    }
    
    function addRewards(address user, uint256 amount) external onlyStakeVault {
        pendingRewards[user] += amount;
    }
}

