const express = require('express');
const cors = require('cors');
require('dotenv').config();

const stakingRoutes = require('./routes/staking');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.use('/api/staking', stakingRoutes);

app.listen(PORT, () => {
  console.log(`StakeFlow backend running on port ${PORT}`);
});

module.exports = app;

