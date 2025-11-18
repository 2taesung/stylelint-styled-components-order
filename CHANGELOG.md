# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive test suite with Jest
- GitHub Actions CI/CD workflows
- ESLint and Prettier configuration
- Grid Layout properties support (grid, grid-template-*, gap, etc.)
- Transform properties (transform, transform-origin, perspective)
- Transition properties (transition, transition-duration, etc.)
- Extended animation properties (animation-name, animation-duration, etc.)
- Typography properties (font-family, text-decoration, text-transform)
- Border properties (border-style, border-color, border-radius-*)
- Overflow properties (overflow-x, overflow-y)
- Miscellaneous properties (opacity, cursor, pointer-events, user-select)
- Contributing guidelines in README
- Detailed property documentation

### Changed
- Replaced deprecated `@stylelint/postcss-css-in-js` with `postcss-styled-syntax`
- Updated all dependencies to latest versions
- License changed from ISC to MIT for consistency
- Expanded README with comprehensive documentation
- Updated property groups organization

### Fixed
- 8 security vulnerabilities in dependencies
- Package.json license inconsistency

### Added to package.json
- `peerDependencies` for stylelint compatibility
- `engines` field specifying Node.js >= 14.0.0
- `devDependencies` for testing and linting
- npm scripts for test, lint, and format

## [1.0.6] - 2023

### Added
- Border-radius property support

### Fixed
- ESLint conflict bug with automatic removal of last property

## [1.0.5] - 2023

### Changed
- Updated package-lock.json version

## [1.0.0] - 2023

### Added
- Initial release
- Basic CSS property ordering for styled-components
- Support for Layout, Box, Background, Font, and Animation properties
- Integration with stylelint-order
- Automatic property ordering with stylelint --fix

[Unreleased]: https://github.com/2taesung/stylelint-styled-components-order/compare/v1.0.6...HEAD
[1.0.6]: https://github.com/2taesung/stylelint-styled-components-order/releases/tag/v1.0.6
[1.0.5]: https://github.com/2taesung/stylelint-styled-components-order/releases/tag/v1.0.5
[1.0.0]: https://github.com/2taesung/stylelint-styled-components-order/releases/tag/v1.0.0
