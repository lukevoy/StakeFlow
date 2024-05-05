// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IPriceOracle
 * @notice Interface for price oracle integration
 */
interface IPriceOracle {
    function getPrice(address token) external view returns (uint256);
    function updatePrice(address token, uint256 price) external;
}

