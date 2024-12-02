const express = require('express');
const router = express.Router();

// Get historical APR data
router.get('/apr-history', async (req, res) => {
  try {
    const { chain, days = 30 } = req.query;
    
    // Mock historical data
    const history = [];
    const baseAPRs = { ETH: 4.5, SUI: 6.2, APT: 5.8 };
    const now = Date.now();
    
    for (let i = days; i >= 0; i--) {
      const date = new Date(now - i * 24 * 60 * 60 * 1000);
      const dataPoint = {
        date: date.toISOString().split('T')[0],
        timestamp: date.getTime()
      };
      
      if (chain) {
        dataPoint[chain] = baseAPRs[chain] + (Math.random() - 0.5);
      } else {
        Object.keys(baseAPRs).forEach(c => {
          dataPoint[c] = baseAPRs[c] + (Math.random() - 0.5);
        });
      }
      
      history.push(dataPoint);
    }
    
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get portfolio performance
router.get('/portfolio', async (req, res) => {
  try {
    const { address } = req.query;
    
    const portfolio = {
      totalValue: '50000',
      totalRewards: '2500',
      apr: 5.2,
      allocation: {
        ETH: 30,
        SUI: 45,
        APT: 25
      }
    };
    
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get rebalancing history
router.get('/rebalances', async (req, res) => {
  try {
    const rebalances = [
      {
        id: 1,
        fromChain: 'ETH',
        toChain: 'SUI',
        amount: '5000',
        timestamp: new Date().toISOString(),
        reason: 'APR differential exceeded threshold'
      }
    ];
    
    res.json(rebalances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

