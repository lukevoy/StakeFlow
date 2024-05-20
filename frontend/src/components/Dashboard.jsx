import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [pools, setPools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPools();
  }, []);

  const fetchPools = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/staking/pools');
      const data = await response.json();
      setPools(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching pools:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h2>Staking Pools</h2>
      <div className="pools-grid">
        {pools.map(pool => (
          <div key={pool.id} className="pool-card">
            <div className="pool-header">
              <h3>{pool.name}</h3>
              <span className="chain-badge">{pool.chain}</span>
            </div>
            <div className="pool-stats">
              <div className="stat">
                <span className="label">APR</span>
                <span className="value apr">{pool.apr}%</span>
              </div>
              <div className="stat">
                <span className="label">Total Staked</span>
                <span className="value">{pool.totalStaked}</span>
              </div>
            </div>
            <button className="stake-button">Stake Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

