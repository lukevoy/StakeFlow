# Contributing to StakeFlow

Thank you for your interest in contributing to StakeFlow! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature or bugfix
4. Make your changes
5. Submit a pull request

## Development Setup

```bash
# Clone the repository
git clone https://github.com/lukevoy/StakeFlow.git
cd StakeFlow

# Install dependencies
npm install
cd backend && npm install
cd ../frontend && npm install
```

## Code Style

- Use consistent indentation (2 spaces)
- Follow JavaScript Standard Style
- Write meaningful commit messages
- Add comments for complex logic
- Keep functions small and focused

## Commit Message Format

Use conventional commits format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `test:` Adding or updating tests
- `refactor:` Code refactoring
- `style:` Code style changes
- `chore:` Maintenance tasks

Example:
```
feat: add multi-chain selector component
```

## Testing

Run tests before submitting:

```bash
# Test smart contracts
npm test

# Test backend
cd backend && npm test

# Test frontend
cd frontend && npm test
```

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Update README if necessary
5. Request review from maintainers

## Code Review

- Be respectful and constructive
- Address all feedback
- Keep PRs focused and small
- Link related issues

## Reporting Issues

When reporting bugs, include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details
- Screenshots if applicable

## Feature Requests

For new features:

- Describe the problem it solves
- Provide use cases
- Suggest implementation approach
- Consider alternatives

## Community

- Be welcoming and inclusive
- Help others learn
- Share knowledge
- Stay professional

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

