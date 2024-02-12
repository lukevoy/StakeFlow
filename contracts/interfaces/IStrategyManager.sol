// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IStrategyManager
 * @notice Interface for multi-chain strategy management
 */
interface IStrategyManager {
    struct Strategy {
        uint256 chainId;
        address poolAddress;
        uint256 apr;
        uint256 allocatedAmount;
        bool isActive;
    }
    
    event StrategyAdded(uint256 indexed strategyId, uint256 chainId, address poolAddress);
    event StrategyUpdated(uint256 indexed strategyId, uint256 newApr);
    event Rebalanced(uint256 indexed fromStrategy, uint256 indexed toStrategy, uint256 amount);
    
    function addStrategy(uint256 chainId, address poolAddress, uint256 apr) external returns (uint256);
    function updateStrategyApr(uint256 strategyId, uint256 newApr) external;
    function rebalance(uint256 fromStrategy, uint256 toStrategy, uint256 amount) external;
    function getStrategy(uint256 strategyId) external view returns (Strategy memory);
    function getAllStrategies() external view returns (Strategy[] memory);
}

