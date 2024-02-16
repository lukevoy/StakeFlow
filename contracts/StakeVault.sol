// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interfaces/IStakeVault.sol";

/**
 * @title StakeVault
 * @notice Main vault contract for managing user deposits and staking positions
 */
contract StakeVault is IStakeVault {
    mapping(address => uint256) private balances;
    uint256 private totalStaked;
    address public owner;
    address public strategyManager;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function setStrategyManager(address _strategyManager) external onlyOwner {
        require(_strategyManager != address(0), "Invalid address");
        strategyManager = _strategyManager;
    }
    
    function deposit(uint256 amount) external override {
        require(amount > 0, "Amount must be greater than 0");
        balances[msg.sender] += amount;
        totalStaked += amount;
        emit Deposit(msg.sender, amount);
    }
    
    function withdraw(uint256 amount) external override {
        require(amount > 0, "Amount must be greater than 0");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        totalStaked -= amount;
        emit Withdraw(msg.sender, amount);
    }
    
    function getBalance(address user) external view override returns (uint256) {
        return balances[user];
    }
    
    function getTotalStaked() external view override returns (uint256) {
        return totalStaked;
    }
}

