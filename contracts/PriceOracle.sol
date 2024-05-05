// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interfaces/IPriceOracle.sol";

/**
 * @title PriceOracle
 * @notice Mock oracle for testing and development
 */
contract PriceOracle is IPriceOracle {
    mapping(address => uint256) private prices;
    address public owner;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function getPrice(address token) external view override returns (uint256) {
        return prices[token];
    }
    
    function updatePrice(address token, uint256 price) external override onlyOwner {
        require(price > 0, "Price must be greater than 0");
        prices[token] = price;
    }
}

