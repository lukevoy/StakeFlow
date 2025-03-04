export const SUPPORTED_CHAINS = {
  ETHEREUM: {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    rpcUrl: 'https://eth.llamarpc.com',
    blockExplorer: 'https://etherscan.io',
    icon: '⟠'
  },
  SUI: {
    id: 2,
    name: 'Sui',
    symbol: 'SUI',
    rpcUrl: 'https://fullnode.mainnet.sui.io',
    blockExplorer: 'https://suiscan.xyz',
    icon: '〰️'
  },
  APTOS: {
    id: 3,
    name: 'Aptos',
    symbol: 'APT',
    rpcUrl: 'https://fullnode.mainnet.aptoslabs.com',
    blockExplorer: 'https://explorer.aptoslabs.com',
    icon: '⬢'
  }
};

export const getChainById = (id) => {
  return Object.values(SUPPORTED_CHAINS).find(chain => chain.id === id);
};

export const getChainByName = (name) => {
  return Object.values(SUPPORTED_CHAINS).find(
    chain => chain.name.toLowerCase() === name.toLowerCase()
  );
};

