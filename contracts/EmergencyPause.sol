// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title EmergencyPause
 * @notice Emergency pause mechanism for critical situations
 */
contract EmergencyPause {
    bool private paused;
    address public owner;
    
    event Paused(address account);
    event Unpaused(address account);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    modifier whenNotPaused() {
        require(!paused, "Contract is paused");
        _;
    }
    
    modifier whenPaused() {
        require(paused, "Contract is not paused");
        _;
    }
    
    constructor() {
        owner = msg.sender;
        paused = false;
    }
    
    function pause() external onlyOwner whenNotPaused {
        paused = true;
        emit Paused(msg.sender);
    }
    
    function unpause() external onlyOwner whenPaused {
        paused = false;
        emit Unpaused(msg.sender);
    }
    
    function isPaused() external view returns (bool) {
        return paused;
    }
}

