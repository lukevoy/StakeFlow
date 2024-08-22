import React, { useState } from 'react';
import './ChainSelector.css';

const ChainSelector = ({ onChainChange }) => {
  const [selectedChain, setSelectedChain] = useState('all');

  const chains = [
    { id: 'all', name: 'All Chains', icon: '🌐' },
    { id: 'eth', name: 'Ethereum', icon: '⟠' },
    { id: 'sui', name: 'Sui', icon: '〰️' },
    { id: 'apt', name: 'Aptos', icon: '⬢' }
  ];

  const handleChainSelect = (chainId) => {
    setSelectedChain(chainId);
    if (onChainChange) {
      onChainChange(chainId);
    }
  };

  return (
    <div className="chain-selector">
      <h3>Select Chain</h3>
      <div className="chain-buttons">
        {chains.map(chain => (
          <button
            key={chain.id}
            className={`chain-button ${selectedChain === chain.id ? 'selected' : ''}`}
            onClick={() => handleChainSelect(chain.id)}
          >
            <span className="chain-icon">{chain.icon}</span>
            <span className="chain-name">{chain.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChainSelector;

