const { shouldRebalance } = require('../utils/calculator');

class RebalanceService {
  constructor() {
    this.rebalanceThreshold = 2; // 2% threshold
    this.checkInterval = 3600000; // 1 hour
    this.isRunning = false;
  }

  async checkRebalanceNeeded(strategies) {
    if (!strategies || strategies.length < 2) {
      return null;
    }

    // Find highest and lowest APR strategies
    let highest = strategies[0];
    let lowest = strategies[0];

    for (const strategy of strategies) {
      if (strategy.apr > highest.apr) highest = strategy;
      if (strategy.apr < lowest.apr) lowest = strategy;
    }

    if (shouldRebalance(lowest.apr, highest.apr, this.rebalanceThreshold)) {
      return {
        shouldRebalance: true,
        from: lowest,
        to: highest,
        aprDifference: highest.apr - lowest.apr
      };
    }

    return null;
  }

  async executeRebalance(fromStrategy, toStrategy, amount) {
    console.log(`Executing rebalance:`);
    console.log(`  From: Strategy #${fromStrategy} to Strategy #${toStrategy}`);
    console.log(`  Amount: ${amount}`);
    
    // Mock implementation - in production, interact with smart contracts
    return {
      success: true,
      txHash: '0x' + Math.random().toString(16).slice(2),
      timestamp: new Date().toISOString()
    };
  }

  start() {
    if (this.isRunning) {
      console.log('Rebalance service is already running');
      return;
    }

    this.isRunning = true;
    console.log('Starting rebalance service...');
    
    this.intervalId = setInterval(async () => {
      console.log('Checking for rebalance opportunities...');
      // Add actual strategy fetching and checking logic here
    }, this.checkInterval);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.isRunning = false;
      console.log('Rebalance service stopped');
    }
  }
}

module.exports = new RebalanceService();

