const express = require('express');
const router = express.Router();

// Get all staking pools
router.get('/pools', async (req, res) => {
  try {
    // Mock data for now
    const pools = [
      {
        id: 1,
        chain: 'ETH',
        name: 'Ethereum Staking',
        apr: 4.5,
        totalStaked: '1000000',
        isActive: true
      },
      {
        id: 2,
        chain: 'SUI',
        name: 'Sui Staking',
        apr: 6.2,
        totalStaked: '500000',
        isActive: true
      }
    ];
    res.json(pools);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user balance
router.get('/balance/:address', async (req, res) => {
  try {
    const { address } = req.params;
    const balance = {
      address,
      totalStaked: '0',
      pendingRewards: '0'
    };
    res.json(balance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

