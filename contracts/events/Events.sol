// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title Events
 * @notice Common events library for StakeFlow contracts
 */
library Events {
    event DepositMade(address indexed user, uint256 amount, uint256 timestamp);
    event WithdrawalMade(address indexed user, uint256 amount, uint256 timestamp);
    event StrategyExecuted(uint256 indexed strategyId, uint256 amount);
    event RebalanceTriggered(uint256 fromStrategy, uint256 toStrategy, uint256 amount);
    event RewardsDistributed(address indexed recipient, uint256 amount);
    event EmergencyAction(string action, address indexed initiator);
}

