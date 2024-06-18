const express = require('express');
const router = express.Router();

// Get all strategies
router.get('/', async (req, res) => {
  try {
    const strategies = [
      {
        id: 0,
        chainId: 1,
        poolAddress: '0x1234...5678',
        apr: 4.5,
        allocatedAmount: '500000',
        isActive: true
      },
      {
        id: 1,
        chainId: 2,
        poolAddress: '0xabcd...efgh',
        apr: 6.2,
        allocatedAmount: '300000',
        isActive: true
      }
    ];
    res.json(strategies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get strategy by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const strategy = {
      id: parseInt(id),
      chainId: 1,
      poolAddress: '0x1234...5678',
      apr: 4.5,
      allocatedAmount: '500000',
      isActive: true
    };
    res.json(strategy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Trigger rebalance
router.post('/rebalance', async (req, res) => {
  try {
    const { fromStrategy, toStrategy, amount } = req.body;
    
    if (!fromStrategy || !toStrategy || !amount) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Mock rebalancing logic
    const result = {
      success: true,
      message: 'Rebalance initiated successfully',
      txHash: '0x' + Math.random().toString(16).slice(2)
    };

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

