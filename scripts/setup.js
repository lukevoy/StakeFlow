const fs = require('fs');
const path = require('path');

async function setup() {
  console.log('Setting up StakeFlow environment...\n');

  // Create logs directory
  const logsDir = path.join(__dirname, '..', 'backend', 'logs');
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
    console.log('✓ Created logs directory');
  }

  // Check for .env files
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) {
    console.log('⚠ Warning: .env file not found');
    console.log('  Please create .env file based on .env.example');
  }

  const backendEnvPath = path.join(__dirname, '..', 'backend', '.env');
  if (!fs.existsSync(backendEnvPath)) {
    console.log('⚠ Warning: backend/.env file not found');
  }

  console.log('\n✓ Setup complete!');
  console.log('\nNext steps:');
  console.log('1. Configure environment variables');
  console.log('2. npm install (in root, backend, and frontend)');
  console.log('3. npm run compile (compile smart contracts)');
  console.log('4. npm run deploy (deploy to testnet)');
}

setup()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

