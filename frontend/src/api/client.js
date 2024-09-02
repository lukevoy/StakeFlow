const API_BASE_URL = 'http://localhost:3000/api';

class APIClient {
  async fetchPools() {
    try {
      const response = await fetch(`${API_BASE_URL}/staking/pools`);
      if (!response.ok) throw new Error('Failed to fetch pools');
      return await response.json();
    } catch (error) {
      console.error('Error fetching pools:', error);
      throw error;
    }
  }

  async fetchBalance(address) {
    try {
      const response = await fetch(`${API_BASE_URL}/staking/balance/${address}`);
      if (!response.ok) throw new Error('Failed to fetch balance');
      return await response.json();
    } catch (error) {
      console.error('Error fetching balance:', error);
      throw error;
    }
  }

  async fetchStrategies() {
    try {
      const response = await fetch(`${API_BASE_URL}/strategy`);
      if (!response.ok) throw new Error('Failed to fetch strategies');
      return await response.json();
    } catch (error) {
      console.error('Error fetching strategies:', error);
      throw error;
    }
  }

  async rebalance(fromStrategy, toStrategy, amount) {
    try {
      const response = await fetch(`${API_BASE_URL}/strategy/rebalance`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fromStrategy, toStrategy, amount })
      });
      if (!response.ok) throw new Error('Failed to rebalance');
      return await response.json();
    } catch (error) {
      console.error('Error rebalancing:', error);
      throw error;
    }
  }
}

export default new APIClient();

