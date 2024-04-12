# StakeFlow

Cross-chain staking optimizer with automated yield management and dynamic strategy adjustment.

## Overview

StakeFlow is an intelligent staking protocol that monitors APR across multiple chains (ETH, SUI, APT, etc.) and automatically adjusts staking positions to maximize yield.

## Features

- Multi-chain staking pool discovery and monitoring
- Automated rebalancing when APR differentials exceed thresholds
- Compound interest through periodic reward harvesting
- Real-time yield curve and asset distribution dashboard

## Architecture

```
[Frontend] → [Backend] → [Smart Contracts] → [Multi-chain RPC + Oracle]
```

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- MetaMask or compatible Web3 wallet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lukevoy/StakeFlow.git
cd StakeFlow
```

2. Install root dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Install frontend dependencies:
```bash
cd frontend
npm install
```

5. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Running the Application

1. Compile smart contracts:
```bash
npm run compile
```

2. Start the backend server:
```bash
cd backend
npm run dev
```

3. Start the frontend development server:
```bash
cd frontend
npm run dev
```

## License

MIT

