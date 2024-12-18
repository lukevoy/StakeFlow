# StakeFlow API Documentation

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### Staking

#### GET /staking/pools
Get all available staking pools.

**Response:**
```json
[
  {
    "id": 1,
    "chain": "ETH",
    "name": "Ethereum Staking",
    "apr": 4.5,
    "totalStaked": "1000000",
    "isActive": true
  }
]
```

#### GET /staking/balance/:address
Get user balance and staking information.

**Parameters:**
- `address` - User wallet address

**Response:**
```json
{
  "address": "0x...",
  "totalStaked": "10000",
  "pendingRewards": "500"
}
```

### Strategy

#### GET /strategy
Get all active strategies.

**Response:**
```json
[
  {
    "id": 0,
    "chainId": 1,
    "poolAddress": "0x...",
    "apr": 4.5,
    "allocatedAmount": "500000",
    "isActive": true
  }
]
```

#### POST /strategy/rebalance
Trigger a rebalancing operation.

**Request Body:**
```json
{
  "fromStrategy": 0,
  "toStrategy": 1,
  "amount": "10000"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Rebalance initiated successfully",
  "txHash": "0x..."
}
```

### Analytics

#### GET /analytics/apr-history
Get historical APR data.

**Query Parameters:**
- `chain` (optional) - Filter by chain (ETH, SUI, APT)
- `days` (optional) - Number of days (default: 30)

**Response:**
```json
[
  {
    "date": "2024-01-01",
    "ETH": 4.5,
    "SUI": 6.2,
    "APT": 5.8
  }
]
```

#### GET /analytics/portfolio
Get portfolio performance summary.

**Query Parameters:**
- `address` - Wallet address

**Response:**
```json
{
  "totalValue": "50000",
  "totalRewards": "2500",
  "apr": 5.2,
  "allocation": {
    "ETH": 30,
    "SUI": 45,
    "APT": 25
  }
}
```

