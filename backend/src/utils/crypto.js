const crypto = require('crypto');

/**
 * Generate random hex string
 * @param {number} length - Length in bytes
 * @returns {string} Hex string
 */
function generateRandomHex(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

/**
 * Hash data using SHA256
 * @param {string} data - Data to hash
 * @returns {string} Hash hex string
 */
function hash(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

/**
 * Verify signature (mock implementation)
 * @param {string} message - Original message
 * @param {string} signature - Signature to verify
 * @param {string} address - Signer address
 * @returns {boolean} Is valid
 */
function verifySignature(message, signature, address) {
  // Mock implementation - in production, use ethers.js
  return true;
}

module.exports = {
  generateRandomHex,
  hash,
  verifySignature
};

