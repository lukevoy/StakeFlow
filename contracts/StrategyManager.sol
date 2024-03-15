// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interfaces/IStrategyManager.sol";

/**
 * @title StrategyManager
 * @notice Manages multi-chain staking strategies and rebalancing
 */
contract StrategyManager is IStrategyManager {
    Strategy[] private strategies;
    address public owner;
    uint256 public rebalanceThreshold = 200; // 2% in basis points
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function addStrategy(
        uint256 chainId,
        address poolAddress,
        uint256 apr
    ) external override onlyOwner returns (uint256) {
        require(poolAddress != address(0), "Invalid pool address");
        
        uint256 strategyId = strategies.length;
        strategies.push(Strategy({
            chainId: chainId,
            poolAddress: poolAddress,
            apr: apr,
            allocatedAmount: 0,
            isActive: true
        }));
        
        emit StrategyAdded(strategyId, chainId, poolAddress);
        return strategyId;
    }
    
    function updateStrategyApr(uint256 strategyId, uint256 newApr) external override onlyOwner {
        require(strategyId < strategies.length, "Invalid strategy ID");
        strategies[strategyId].apr = newApr;
        emit StrategyUpdated(strategyId, newApr);
    }
    
    function rebalance(
        uint256 fromStrategy,
        uint256 toStrategy,
        uint256 amount
    ) external override onlyOwner {
        require(fromStrategy < strategies.length && toStrategy < strategies.length, "Invalid strategy ID");
        require(strategies[fromStrategy].allocatedAmount >= amount, "Insufficient amount");
        
        strategies[fromStrategy].allocatedAmount -= amount;
        strategies[toStrategy].allocatedAmount += amount;
        
        emit Rebalanced(fromStrategy, toStrategy, amount);
    }
    
    function getStrategy(uint256 strategyId) external view override returns (Strategy memory) {
        require(strategyId < strategies.length, "Invalid strategy ID");
        return strategies[strategyId];
    }
    
    function getAllStrategies() external view override returns (Strategy[] memory) {
        return strategies;
    }
    
    function setRebalanceThreshold(uint256 threshold) external onlyOwner {
        rebalanceThreshold = threshold;
    }
}

