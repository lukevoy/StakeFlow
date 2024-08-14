/**
 * Calculate compound interest
 * @param {number} principal - Initial amount
 * @param {number} rate - Interest rate (as percentage)
 * @param {number} time - Time period
 * @param {number} frequency - Compounding frequency per time period
 * @returns {number} Final amount after compound interest
 */
function calculateCompoundInterest(principal, rate, time, frequency = 365) {
  const rateDecimal = rate / 100;
  const amount = principal * Math.pow(1 + rateDecimal / frequency, frequency * time);
  return amount;
}

/**
 * Calculate APY from APR
 * @param {number} apr - Annual Percentage Rate
 * @param {number} frequency - Compounding frequency
 * @returns {number} Annual Percentage Yield
 */
function calculateAPY(apr, frequency = 365) {
  const rateDecimal = apr / 100;
  const apy = (Math.pow(1 + rateDecimal / frequency, frequency) - 1) * 100;
  return apy;
}

/**
 * Calculate expected returns over time period
 * @param {number} amount - Staked amount
 * @param {number} apr - Annual Percentage Rate
 * @param {number} days - Number of days
 * @returns {number} Expected returns
 */
function calculateExpectedReturns(amount, apr, days) {
  const dailyRate = apr / 365 / 100;
  const returns = amount * dailyRate * days;
  return returns;
}

/**
 * Check if rebalancing is needed
 * @param {number} currentAPR - Current strategy APR
 * @param {number} targetAPR - Target strategy APR
 * @param {number} threshold - Minimum difference to trigger rebalance (in percentage points)
 * @returns {boolean} Whether rebalancing is needed
 */
function shouldRebalance(currentAPR, targetAPR, threshold = 2) {
  const difference = Math.abs(targetAPR - currentAPR);
  return difference >= threshold;
}

module.exports = {
  calculateCompoundInterest,
  calculateAPY,
  calculateExpectedReturns,
  shouldRebalance
};

