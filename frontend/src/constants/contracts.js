export const CONTRACT_ADDRESSES = {
  STAKE_VAULT: process.env.VITE_STAKE_VAULT_ADDRESS || '',
  STRATEGY_MANAGER: process.env.VITE_STRATEGY_MANAGER_ADDRESS || '',
  REWARD_DISTRIBUTOR: process.env.VITE_REWARD_DISTRIBUTOR_ADDRESS || ''
};

export const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000/api';

