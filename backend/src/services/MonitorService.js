const axios = require('axios');

class MonitorService {
  constructor() {
    this.chains = ['ETH', 'SUI', 'APT'];
    this.monitorInterval = 60000; // 1 minute
    this.isRunning = false;
  }

  async fetchChainAPR(chain) {
    // Mock implementation - in production, fetch from actual APIs
    const mockAPRs = {
      'ETH': 4.5 + Math.random() * 0.5,
      'SUI': 6.2 + Math.random() * 0.8,
      'APT': 5.8 + Math.random() * 0.6
    };
    return mockAPRs[chain] || 0;
  }

  async monitorAllChains() {
    console.log('Monitoring APRs across all chains...');
    const aprData = [];

    for (const chain of this.chains) {
      try {
        const apr = await this.fetchChainAPR(chain);
        aprData.push({ chain, apr, timestamp: new Date().toISOString() });
        console.log(`${chain}: ${apr.toFixed(2)}% APR`);
      } catch (error) {
        console.error(`Error fetching APR for ${chain}:`, error.message);
      }
    }

    return aprData;
  }

  start() {
    if (this.isRunning) {
      console.log('Monitor service is already running');
      return;
    }

    this.isRunning = true;
    console.log('Starting monitor service...');
    
    this.intervalId = setInterval(() => {
      this.monitorAllChains();
    }, this.monitorInterval);

    // Initial monitoring
    this.monitorAllChains();
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.isRunning = false;
      console.log('Monitor service stopped');
    }
  }
}

module.exports = new MonitorService();

