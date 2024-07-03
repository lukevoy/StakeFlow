module.exports = {
  chains: {
    ethereum: {
      chainId: 1,
      name: 'Ethereum',
      rpcUrl: process.env.MAINNET_RPC_URL || 'https://eth.llamarpc.com',
      nativeCurrency: 'ETH',
      blockExplorer: 'https://etherscan.io'
    },
    sui: {
      chainId: 2,
      name: 'Sui',
      rpcUrl: process.env.SUI_RPC_URL || 'https://fullnode.mainnet.sui.io',
      nativeCurrency: 'SUI',
      blockExplorer: 'https://suiscan.xyz'
    },
    aptos: {
      chainId: 3,
      name: 'Aptos',
      rpcUrl: process.env.APTOS_RPC_URL || 'https://fullnode.mainnet.aptoslabs.com',
      nativeCurrency: 'APT',
      blockExplorer: 'https://explorer.aptoslabs.com'
    }
  },
  
  getChainById(chainId) {
    return Object.values(this.chains).find(chain => chain.chainId === chainId);
  },
  
  getAllChains() {
    return Object.values(this.chains);
  }
};

