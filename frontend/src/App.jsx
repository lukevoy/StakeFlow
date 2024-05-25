import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <header>
        <h1>StakeFlow</h1>
        <p>Cross-chain Staking Optimizer</p>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;

