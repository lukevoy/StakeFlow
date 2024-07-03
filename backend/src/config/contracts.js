module.exports = {
  contracts: {
    stakeVault: {
      address: process.env.STAKE_VAULT_ADDRESS || '',
      abi: [] // To be populated after deployment
    },
    strategyManager: {
      address: process.env.STRATEGY_MANAGER_ADDRESS || '',
      abi: []
    },
    rewardDistributor: {
      address: process.env.REWARD_DISTRIBUTOR_ADDRESS || '',
      abi: []
    }
  },
  
  getContract(name) {
    return this.contracts[name];
  }
};

