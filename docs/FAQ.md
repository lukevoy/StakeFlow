# Frequently Asked Questions (FAQ)

## General Questions

### What is StakeFlow?
StakeFlow is a cross-chain staking optimizer that automatically monitors APR across multiple blockchains and dynamically adjusts staking positions to maximize yield.

### Which chains are supported?
Currently, StakeFlow supports:
- Ethereum (ETH)
- Sui (SUI)
- Aptos (APT)

Additional chains will be added in future releases.

### Is StakeFlow audited?
Internal audits have been completed. External security audits are pending for the mainnet release.

### What are the fees?
Fee structure will be announced closer to mainnet launch.

## Technical Questions

### How does automatic rebalancing work?
The system monitors APR differentials across chains. When the difference exceeds a predefined threshold (default 2%), funds are automatically moved to the higher-yielding strategy.

### How often are rewards compounded?
By default, rewards are compounded weekly. This interval can be adjusted by governance.

### Can I withdraw my funds at any time?
Yes, you can withdraw your staked funds at any time, subject to the underlying protocol's withdrawal conditions.

### What wallets are supported?
Currently, MetaMask is supported. Additional wallet integrations (WalletConnect, Coinbase Wallet) are planned.

## Security Questions

### How are funds secured?
Funds are secured through:
- Multi-signature governance
- Emergency pause mechanism
- Role-based access control
- Regular security audits

### What happens in case of a security incident?
The emergency pause mechanism can be activated to halt all operations. Multi-sig owners can then assess and address the situation.

### Are smart contracts upgradeable?
This will be determined based on community governance preferences.

## Usage Questions

### How do I get started?
1. Connect your wallet
2. Select the chains you want to stake on
3. Deposit funds
4. StakeFlow automatically optimizes your staking strategy

### What is the minimum stake amount?
Minimum stake amounts will be announced at launch.

### How do I track my earnings?
The dashboard provides real-time tracking of your staked amount, current APR, and accumulated rewards.

## Support

### Where can I get help?
- GitHub Issues: For technical problems
- Discord: Community support (link TBA)
- Email: support@stakeflow.io

### How can I contribute?
See our [Contributing Guide](../CONTRIBUTING.md) for information on how to contribute to the project.

