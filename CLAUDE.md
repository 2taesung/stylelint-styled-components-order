# CLAUDE.md - AI Assistant Guide

## Project Overview

**stylelint-styled-components-order** is a Stylelint configuration package that validates and auto-fixes the order of CSS properties specifically for styled-components. It provides an opinionated property ordering system based on Concentric CSS principles, with a focus on commonly used property groups.

- **Package Name**: stylelint-styled-components-order
- **Version**: 1.0.6
- **License**: MIT (though package.json says ISC - note this discrepancy)
- **Author**: Taesung Lee
- **Main Entry**: `src/index.js`

## Repository Structure

```
stylelint-styled-components-order/
├── src/
│   └── index.js              # Main configuration file (only source file)
├── package.json              # Package configuration and dependencies
├── package-lock.json         # Locked dependency versions
├── README.md                 # User-facing documentation
├── LICENSE                   # MIT License
├── .gitignore               # Standard Node.js gitignore
└── CLAUDE.md                # This file (AI assistant guide)
```

### Key Files

#### `src/index.js`
The core and only source file. It:
- Defines CSS property groups (Layout, Box, Background, Font, Animation)
- Exports a Stylelint configuration object
- Configures the `stylelint-order` plugin
- Sets custom syntax for styled-components (`@stylelint/postcss-css-in-js`)
- Defines property ordering rules with empty line thresholds

## Core Concepts

### CSS Property Groups

The configuration organizes CSS properties into 5 semantic groups:

1. **Layout** (30 properties): Display, flexbox, positioning, visibility, overflow
2. **Box** (51 properties): Dimensions, margin, padding, border, outline, box-shadow
3. **Background** (10 properties): All background-related properties
4. **Font** (10 properties): Typography and text styling
5. **Animation** (1 property): Animation property

**Unspecified properties**: Placed at bottom in alphabetical order

### Configuration Philosophy

- Groups separated by empty lines (threshold-based)
- No empty lines between properties in the same group
- Custom properties (CSS variables) ordered before regular declarations
- Minimum 3 properties required before adding empty lines
- Works with `stylelint --fix` for auto-correction

## Dependencies

### Runtime Dependencies

- **`stylelint-order`** (^6.0.3): Core plugin for property ordering
- **`@stylelint/postcss-css-in-js`** (^0.38.0): Custom syntax for CSS-in-JS
- **`postcss-styled-syntax`** (^0.4.0): Styled-components syntax support
- **`postcss-syntax`** (^0.36.2): PostCSS syntax parser
- **`postcss`** (^8.4.24): CSS transformation tool (peer dependency)

### No Dev Dependencies

This package has NO development dependencies defined. This means:
- No test framework is configured
- No linting/formatting tools are set up
- No build process exists
- Direct publishing from source

## Development Workflow

### Making Changes

1. **Modify Property Groups**: Edit the `groupMap` object in `src/index.js`
   - Add new properties to existing groups
   - Create new groups if needed
   - Maintain alphabetical order within groups (not strictly enforced but recommended)

2. **Adjust Rules**: Modify the `rules` object to change behavior:
   - `declaration-empty-line-before`: Controls spacing between declarations
   - `order/order`: Controls ordering of custom properties vs declarations
   - `order/properties-order`: Main property ordering configuration

3. **Update Version**: Increment version in `package.json` following semver:
   - Patch (1.0.x): Bug fixes, minor property additions
   - Minor (1.x.0): New features, significant property additions
   - Major (x.0.0): Breaking changes

### Commit Conventions

Based on recent commit history, use conventional commit format:

```
<type>: <description>

Types:
- feat: New feature (e.g., "feat: border-radius")
- fix: Bug fix (e.g., "fix: eslint conflict bug")
- docs: Documentation changes (e.g., "docs: Recommendation Usage")
- config: Configuration changes
```

### Testing Considerations

**IMPORTANT**: This repository currently has NO automated tests. When making changes:

1. **Manual Testing Required**:
   - Create a test styled-components project
   - Install your modified version locally (`npm link`)
   - Run stylelint with your config
   - Verify property ordering works correctly
   - Test with `stylelint --fix` to ensure auto-fixing works

2. **Recommended Test Cases**:
   - Properties from all 5 groups
   - Unspecified properties (should go to bottom alphabetically)
   - Custom properties (CSS variables)
   - Mixed ordered and unordered properties
   - Empty line threshold behavior (< 3 properties vs >= 3)

## Common AI Assistant Tasks

### Adding New CSS Properties

When adding new properties to the configuration:

1. Determine which semantic group it belongs to (Layout, Box, Background, Font, Animation)
2. Add to the appropriate array in `groupMap`
3. Consider logical positioning within the group
4. Update version number
5. Test manually before committing

Example:
```javascript
Box: [
  // ... existing properties
  'border-radius',  // Recently added in commit a522e03
  // ... more properties
]
```

### Fixing Bugs

Recent bug fix pattern (commit ab9f272):
- "fix: eslint conflict bug, then automatically remove last property"
- Issues may arise from property ordering conflicts with other tools
- Focus on edge cases: last property in groups, empty line handling

### Updating Documentation

- Update `README.md` for user-facing changes
- Keep installation instructions clear and minimal
- Maintain recommendation to use with `stylelint-config-standard`

### Publishing New Versions

1. Update `package.json` version
2. Commit with message like "plus version" or "vX.X.X"
3. Push to main branch
4. Run `npm publish` (requires npm authentication)
5. Create git tag: `git tag vX.X.X && git push --tags`

## Key Conventions

### Code Style

- Use `const` for immutable objects
- Single quotes for strings (not consistently enforced)
- 2-space indentation
- ES6 module.exports (CommonJS format)
- Clear object structures with logical grouping

### Property Ordering Within Groups

While not strictly enforced, the general pattern is:
- **Layout**: Display modes → Flex properties → Visibility → Overflow → Float → Positioning → Z-index
- **Box**: Dimensions → Margins → Padding → Outline → Border → Border-radius → Box-shadow
- **Background**: Logical flow from general to specific
- **Font**: Color → Style → Weight → Size → Line height → Spacing → Alignment

### Empty Line Rules

- `emptyLineBefore: 'threshold'`: Add empty line before groups when threshold met
- `emptyLineMinimumPropertyThreshold: 3`: Minimum 3 properties to add empty lines
- `noEmptyLineBetween: true`: No empty lines within groups

## Git Workflow

### Branch Strategy

- Main development on `main` branch (inferred)
- AI assistant work on `claude/` prefixed branches
- Current AI branch: `claude/claude-md-mi27ihy4bonmeg4f-01RVkzQw7pcvxi87AGJRtSGC`

### Pushing Changes

Always push to the designated claude branch:
```bash
git add .
git commit -m "type: description"
git push -u origin claude/claude-md-mi27ihy4bonmeg4f-01RVkzQw7pcvxi87AGJRtSGC
```

## Known Issues & Considerations

1. **License Discrepancy**: LICENSE file says MIT, package.json says ISC
2. **No Tests**: No automated testing framework
3. **No Dev Dependencies**: May want to add testing/linting tools
4. **Single File Package**: Entire logic in one file (simple but less modular)
5. **No Build Process**: Source is published directly (appropriate for this simple package)

## Future Enhancement Opportunities

1. Add automated tests (Jest, Mocha, or similar)
2. Add ESLint configuration for code quality
3. Create example/test directory with sample styled-components
4. Add CI/CD pipeline (GitHub Actions)
5. Consider TypeScript for better type safety
6. Add more comprehensive property coverage
7. Document the rationale for property ordering

## Resources

- [Concentric CSS](http://rhodesmill.org/brandon/2011/concentric-css/) - Ordering philosophy
- [Stylelint Documentation](https://stylelint.io/)
- [stylelint-order Plugin](https://github.com/hudochenkov/stylelint-order)
- [styled-components](https://styled-components.com/)

## Quick Reference

### Testing Changes Locally

```bash
# In this repository
npm link

# In a test project
npm link stylelint-styled-components-order
```

### Validating the Configuration

```javascript
// Test file: stylelint.config.js
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-styled-components-order'],
};
```

```bash
# Run stylelint
npx stylelint "**/*.js"

# Run with auto-fix
npx stylelint "**/*.js" --fix
```

---

**Last Updated**: 2025-11-16 (by Claude)
**Repository Version**: 1.0.6
