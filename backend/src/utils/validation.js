/**
 * Validate Ethereum address
 * @param {string} address - Address to validate
 * @returns {boolean} Is valid
 */
function isValidAddress(address) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Validate amount
 * @param {string|number} amount - Amount to validate
 * @returns {boolean} Is valid
 */
function isValidAmount(amount) {
  const num = parseFloat(amount);
  return !isNaN(num) && num > 0 && isFinite(num);
}

/**
 * Validate APR value
 * @param {string|number} apr - APR to validate
 * @returns {boolean} Is valid
 */
function isValidAPR(apr) {
  const num = parseFloat(apr);
  return !isNaN(num) && num >= 0 && num <= 100;
}

/**
 * Validate chain ID
 * @param {number} chainId - Chain ID to validate
 * @returns {boolean} Is valid
 */
function isValidChainId(chainId) {
  const validChains = [1, 2, 3]; // ETH, SUI, APT
  return validChains.includes(chainId);
}

/**
 * Sanitize input string
 * @param {string} input - Input to sanitize
 * @returns {string} Sanitized input
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, '');
}

/**
 * Validate pagination parameters
 * @param {number} page - Page number
 * @param {number} limit - Items per page
 * @returns {object} Validated parameters
 */
function validatePagination(page, limit) {
  const validPage = Math.max(1, parseInt(page) || 1);
  const validLimit = Math.min(100, Math.max(1, parseInt(limit) || 10));
  return { page: validPage, limit: validLimit };
}

module.exports = {
  isValidAddress,
  isValidAmount,
  isValidAPR,
  isValidChainId,
  sanitizeInput,
  validatePagination
};

