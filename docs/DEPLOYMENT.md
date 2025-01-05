# Deployment Guide

## Prerequisites

- Node.js v18 or higher
- Hardhat
- MetaMask wallet with testnet ETH
- Infura or Alchemy API key

## Smart Contract Deployment

### 1. Configure Environment

Create a `.env` file in the root directory:

```bash
PRIVATE_KEY=your_private_key
MAINNET_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY
ETHERSCAN_API_KEY=your_etherscan_key
```

### 2. Compile Contracts

```bash
npm install
npm run compile
```

### 3. Deploy to Testnet

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### 4. Verify Contracts

```bash
export CONTRACT_ADDRESS=0x...
npm run verify
```

## Backend Deployment

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Create `backend/.env`:

```bash
PORT=3000
NODE_ENV=production
MAINNET_RPC_URL=your_rpc_url
STAKE_VAULT_ADDRESS=deployed_contract_address
STRATEGY_MANAGER_ADDRESS=deployed_contract_address
REWARD_DISTRIBUTOR_ADDRESS=deployed_contract_address
```

### 3. Start Server

```bash
npm start
```

Or with PM2 for production:

```bash
npm install -g pm2
pm2 start src/index.js --name stakeflow-backend
```

## Frontend Deployment

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Build for Production

```bash
npm run build
```

### 3. Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or deploy to Netlify:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Docker Deployment

### Build Images

```bash
docker-compose build
```

### Run Containers

```bash
docker-compose up -d
```

## Monitoring and Maintenance

### Check Logs

```bash
# Backend logs with PM2
pm2 logs stakeflow-backend

# Docker logs
docker-compose logs -f
```

### Health Checks

```bash
curl http://localhost:3000/health
```

### Database Backups

Set up automated backups for any persistent data storage.

## Security Checklist

- [ ] All private keys secured
- [ ] Environment variables configured
- [ ] Smart contracts audited
- [ ] Multi-sig wallet set up
- [ ] Rate limiting enabled
- [ ] CORS properly configured
- [ ] HTTPS/SSL certificate installed
- [ ] Monitoring and alerts set up

## Rollback Procedure

1. Keep previous deployment artifacts
2. Document contract addresses
3. Have emergency pause mechanism ready
4. Test rollback procedure on testnet first

