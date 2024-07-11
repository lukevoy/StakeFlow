import React, { useState, useEffect } from 'react';
import './StrategyPanel.css';

const StrategyPanel = () => {
  const [strategies, setStrategies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStrategies();
  }, []);

  const fetchStrategies = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/strategy');
      const data = await response.json();
      setStrategies(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching strategies:', error);
      setLoading(false);
    }
  };

  const handleRebalance = async (fromId, toId) => {
    try {
      const response = await fetch('http://localhost:3000/api/strategy/rebalance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromStrategy: fromId,
          toStrategy: toId,
          amount: '10000'
        })
      });
      const result = await response.json();
      console.log('Rebalance result:', result);
      alert('Rebalance initiated successfully!');
    } catch (error) {
      console.error('Error rebalancing:', error);
      alert('Failed to initiate rebalance');
    }
  };

  if (loading) {
    return <div className="loading">Loading strategies...</div>;
  }

  return (
    <div className="strategy-panel">
      <h2>Active Strategies</h2>
      <div className="strategies-list">
        {strategies.map(strategy => (
          <div key={strategy.id} className="strategy-card">
            <div className="strategy-info">
              <h4>Strategy #{strategy.id}</h4>
              <p>Chain ID: {strategy.chainId}</p>
              <p>Pool: {strategy.poolAddress}</p>
            </div>
            <div className="strategy-metrics">
              <div className="metric">
                <span className="label">APR</span>
                <span className="value">{strategy.apr}%</span>
              </div>
              <div className="metric">
                <span className="label">Allocated</span>
                <span className="value">{strategy.allocatedAmount}</span>
              </div>
            </div>
            <span className={`status ${strategy.isActive ? 'active' : 'inactive'}`}>
              {strategy.isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyPanel;

