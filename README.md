# stylelint-styled-components-order

[![npm version](https://img.shields.io/npm/v/stylelint-styled-components-order.svg)](https://www.npmjs.com/package/stylelint-styled-components-order)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/2taesung/stylelint-styled-components-order/workflows/CI/badge.svg)](https://github.com/2taesung/stylelint-styled-components-order/actions)

A [stylelint] configuration that validates the order of CSS properties, built to support styled-components. Although based on [Concentric CSS], this configuration centers on Layout, Box, Background, Font, Transform, Transition, Animation, and Miscellaneous properties, which are frequently used in modern CSS development.

The configuration works seamlessly with `stylelint --fix` to automatically reorder your properties.

## Features

- Automatic CSS property ordering for styled-components
- Supports modern CSS features including Grid Layout, Flexbox, and Transforms
- Compatible with `stylelint --fix` for automatic formatting
- Zero configuration needed - just extend and use
- Comprehensive property coverage (100+ CSS properties)

## Installation

```sh
npm install --save-dev stylelint-styled-components-order
```

## Recommended Usage

Install `stylelint-config-standard` as a dev dependency and create `stylelint.config.js`:

```sh
npm install --save-dev stylelint stylelint-config-standard
```

Then create `stylelint.config.js`:

```javascript
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-styled-components-order'],
};
```

That's it! Just 3 lines and you're done.

## Alternative Usage

Add this configuration to the end of your `extends` array inside `.stylelintrc` or `stylelint.config.js`:

### Using .stylelintrc (JSON)

```json
{
  "extends": [
    "stylelint-styled-components-order"
  ],
  "rules": {
  }
}
```

### Using stylelint.config.js

```javascript
module.exports = {
  extends: [
    'stylelint-styled-components-order'
  ],
  rules: {
  }
}
```

## Property Groups

Properties are organized into the following groups:

1. **Layout** - Display, positioning, flexbox, and grid properties
2. **Box** - Dimensions, spacing (margin/padding), borders, and box model
3. **Background** - Background-related properties
4. **Font** - Typography and text styling
5. **Transform** - CSS transforms and 3D properties
6. **Transition** - Transition properties
7. **Animation** - Animation properties
8. **Misc** - Other properties like opacity, cursor, and list styles

## Supported CSS Properties

### Layout (50+ properties)
- Display and positioning
- Flexbox (`display`, `flex-*`, `align-*`, `justify-*`)
- Grid Layout (`grid`, `grid-template-*`, `gap`, `grid-area`)
- Positioning (`position`, `top`, `right`, `bottom`, `left`, `z-index`)
- Overflow and visibility

### Box Model (40+ properties)
- Dimensions (`width`, `height`, `min-*`, `max-*`)
- Spacing (`margin`, `padding` and their variants)
- Borders (`border`, `border-*`, `outline`)
- Border radius
- Box shadow and sizing

### Typography (20+ properties)
- Font properties (`font-family`, `font-size`, `font-weight`)
- Text styling (`color`, `text-align`, `text-decoration`, `text-transform`)
- Line height and letter spacing
- Word wrapping and breaking

### Visual Effects
- Backgrounds (`background`, `background-*`)
- Transforms (`transform`, `transform-origin`)
- Transitions (`transition`, `transition-*`)
- Animations (`animation`, `animation-*`)

### Other Properties
- Opacity and cursor
- User interaction (`pointer-events`, `user-select`)
- List styles
- Table properties

## Example

### Before

```javascript
const Button = styled.button`
  color: white;
  padding: 10px 20px;
  background: blue;
  display: flex;
  border-radius: 4px;
  font-size: 14px;
  align-items: center;
`;
```

### After (with stylelint --fix)

```javascript
const Button = styled.button`
  display: flex;
  align-items: center;

  padding: 10px 20px;

  border-radius: 4px;

  background: blue;

  color: white;
  font-size: 14px;
`;
```

## Scripts

```sh
# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check
```

## Requirements

- Node.js >= 14.0.0
- stylelint ^14.0.0 || ^15.0.0 || ^16.0.0

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes.

## License

[MIT](LICENSE) © Taesung Lee

## Related

- [stylelint] - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles
- [stylelint-order] - A plugin pack of order-related linting rules for stylelint
- [Concentric CSS] - A CSS property ordering system

[stylelint]: https://stylelint.io/
[stylelint-order]: https://github.com/hudochenkov/stylelint-order
[Concentric CSS]: http://rhodesmill.org/brandon/2011/concentric-css/
