/**
 * Format wallet address to shortened version
 * @param {string} address - Full wallet address
 * @param {number} startLength - Characters to show at start
 * @param {number} endLength - Characters to show at end
 * @returns {string} Formatted address
 */
export const formatAddress = (address, startLength = 6, endLength = 4) => {
  if (!address) return '';
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};

/**
 * Format number with thousand separators
 * @param {number|string} value - Number to format
 * @param {number} decimals - Decimal places
 * @returns {string} Formatted number
 */
export const formatNumber = (value, decimals = 2) => {
  const num = parseFloat(value);
  if (isNaN(num)) return '0';
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
};

/**
 * Format currency value
 * @param {number|string} value - Value to format
 * @param {string} currency - Currency symbol
 * @returns {string} Formatted currency
 */
export const formatCurrency = (value, currency = '$') => {
  const num = parseFloat(value);
  if (isNaN(num)) return `${currency}0`;
  return `${currency}${formatNumber(num, 2)}`;
};

/**
 * Format percentage
 * @param {number|string} value - Percentage value
 * @param {number} decimals - Decimal places
 * @returns {string} Formatted percentage
 */
export const formatPercent = (value, decimals = 2) => {
  const num = parseFloat(value);
  if (isNaN(num)) return '0%';
  return `${formatNumber(num, decimals)}%`;
};

/**
 * Format timestamp to readable date
 * @param {number|string} timestamp - Unix timestamp or ISO string
 * @returns {string} Formatted date
 */
export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Format large numbers with K, M, B suffixes
 * @param {number|string} value - Number to format
 * @returns {string} Formatted number
 */
export const formatCompact = (value) => {
  const num = parseFloat(value);
  if (isNaN(num)) return '0';
  
  if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return num.toFixed(2);
};

