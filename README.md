# stylelint-styled-components-order

This is [stylelint] configuration validates the order of CSS properties built to support styled-components. And although it is based on [Concentric CSS], we centered on Layout, Box, Background, Font and Animation, which we use frequently, and put other properties at the bottom. This judgment is subjective on my part. If you have any comments, we will consider them and improve them.

The configuration works with `stylelint --fix`

## Installation

```sh
npm install --save-dev stylelint-styled-components-order
```

## Usage

Add this configuration to the end of your `extends` array inside `.stylelintrc`

```javascript
{
  "extends": [
    // ...some other shareable Stylelint configuration
    "stylelint-styled-components-order"
  ],

  "rules": {
    // ...your own custom rules and overrides
  }
}
```

[Concentric CSS]: http://rhodesmill.org/brandon/2011/concentric-css/
[stylelint]: https://stylelint.io/
