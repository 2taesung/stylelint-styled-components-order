# Contributing to stylelint-styled-components-order

First off, thank you for considering contributing to stylelint-styled-components-order! It's people like you that make this project better for everyone.

## Code of Conduct

This project and everyone participating in it is governed by respect and professionalism. Please be kind and courteous to others.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed and what you expected
- Include your environment details (Node.js version, stylelint version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful
- Provide examples of how it would be used

### Adding New CSS Properties

If you notice missing CSS properties:

1. Check the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) for the property
2. Determine which group it belongs to (Layout, Box, Background, Font, Transform, Transition, Animation, or Misc)
3. Add it to the appropriate location in `src/index.js`
4. Add a test case in `__tests__/index.test.js`
5. Update the README.md if needed
6. Submit a pull request

### Pull Request Process

1. Fork the repository and create your branch from `main`
2. If you've added code, add tests
3. Ensure the test suite passes (`npm test`)
4. Make sure your code follows the existing code style (`npm run lint` and `npm run format:check`)
5. Update the documentation as needed
6. Write a clear commit message describing your changes
7. Open a pull request with a clear title and description

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/stylelint-styled-components-order.git

# Install dependencies
npm install

# Run tests
npm test

# Run linter
npm run lint

# Format code
npm run format
```

## Project Structure

```
stylelint-styled-components-order/
├── src/
│   └── index.js           # Main configuration file
├── __tests__/
│   └── index.test.js      # Test suite
├── .github/
│   └── workflows/         # CI/CD workflows
├── package.json
├── README.md
└── CHANGELOG.md
```

## Coding Standards

- Use ES6+ JavaScript features
- Follow the existing code style (enforced by ESLint and Prettier)
- Write meaningful variable and function names
- Comment complex logic
- Keep functions small and focused
- Write tests for new features

## Testing

This project uses Jest for testing. All new features should include tests.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests when relevant

Examples:
- `feat: add grid-template-areas property`
- `fix: correct border-radius property ordering`
- `docs: update README with new properties`
- `test: add tests for transform properties`
- `chore: update dependencies`

## Release Process

Maintainers handle releases. Version numbers follow [Semantic Versioning](https://semver.org/):

- MAJOR version for incompatible API changes
- MINOR version for new functionality in a backwards compatible manner
- PATCH version for backwards compatible bug fixes

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
