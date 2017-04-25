# stylelint-config-fozzie

[![NPM version](http://img.shields.io/npm/v/stylelint-config-fozzie.svg)](https://www.npmjs.org/package/stylelint-config-fozzie) [![Build Status](https://travis-ci.org/stylelint/stylelint-config-fozzie.svg?branch=master)](https://travis-ci.org/stylelint/stylelint-config-fozzie)

> Fozzie shareable stylelint config.

A Stylelint config used in Fozzie – Just Eat’s Component Framework

Use it as is or as a foundation for your own config.

To see the rules that this config uses, please read the [config itself](./index.js).


## Installation

```bash
npm install stylelint-config-fozzie --save-dev
```

## Usage

If you've installed `stylelint-config-fozzie` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-fozzie"
}
```

The easiest way to do this is by adding the following section to your package.json:

```json
"stylelint": {
  "extends": "stylelint-config-fozzie"
}
```

If you've globally installed `stylelint-config-fozzie` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-fozzie` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-fozzie"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `indentation` to tabs, turn off the `number-leading-zero` rule:

```json
{
  "extends": "stylelint-config-fozzie",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

### Documentation

#### Configured Lints

`stylelint-config-fozzie` is a great foundation for your own config. Here is a list of the rules turned on in this config, and what they do:

-   [at-rule-no-vendor-prefix](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/): Disallow vendor prefixes for at-rules.
-   [block-closing-brace-newline-after](https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/): Require a newline or disallow whitespace after the closing brace of blocks.
-   [block-closing-brace-newline-before](https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/): Require a newline or disallow whitespace before the closing brace of blocks.
-   [block-closing-brace-space-before](https://stylelint.io/user-guide/rules/block-closing-brace-space-before/): Require a single space or disallow whitespace before the closing brace of blocks.
-   [block-no-empty](https://stylelint.io/user-guide/rules/block-no-empty/): Disallow empty blocks.
-   [block-opening-brace-newline-after](https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/): Require a newline after the opening brace of blocks.
-   [block-opening-brace-space-after](https://stylelint.io/user-guide/rules/block-opening-brace-space-after/): Require a single space or disallow whitespace after the opening brace of blocks.
-   [block-opening-brace-space-before](https://stylelint.io/user-guide/rules/block-opening-brace-space-before/): Require a single space or disallow whitespace before the opening brace of blocks.
-   [color-hex-case](https://stylelint.io/user-guide/rules/color-hex-case/): Specify lowercase or uppercase for hex colors.
-   [color-hex-length](https://stylelint.io/user-guide/rules/color-hex-length/): Specify short or long notation for hex colors.
-   [color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex/): Disallow invalid hex colors.
-   [comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty/): Disallow empty comments.
-   [comment-whitespace-inside](https://stylelint.io/user-guide/rules/comment-whitespace-inside/): Require or disallow whitespace on the inside of comment markers.
-   [declaration-bang-space-after](https://stylelint.io/user-guide/rules/declaration-bang-space-after/): Require a single space or disallow whitespace after the bang of declarations.
-   [declaration-bang-space-before](https://stylelint.io/user-guide/rules/declaration-bang-space-before/): Require a single space or disallow whitespace before the bang of declarations.
-   [declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/): Disallow shorthand properties that override related longhand properties within declaration blocks.
-   [declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/): Disallow longhand properties that can be combined into one shorthand property.
-   [declaration-block-semicolon-space-after](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/): Require a single space or disallow whitespace after the semicolons of declaration blocks.
-   [declaration-block-semicolon-space-before](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/): Require a single space or disallow whitespace before the semicolons of declaration blocks.
-   [declaration-block-single-line-max-declarations](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/): Limit the number of declaration within single line declaration blocks.
-   [declaration-block-trailing-semicolon](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/): Require or disallow a trailing semicolon within declaration blocks.
-   [declaration-colon-space-after](https://stylelint.io/user-guide/rules/declaration-colon-space-after/): Require a single space or disallow whitespace after the colon of declarations.
-   [function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/): Disallow an unspaced operator within calc functions.
-   [function-comma-space-after](https://stylelint.io/user-guide/rules/function-comma-space-after/): Require a single space or disallow whitespace after the commas of functions.
-   [function-comma-space-before](https://stylelint.io/user-guide/rules/function-comma-space-before/): Require a single space or disallow whitespace before the commas of functions.
-   [function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/): Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
-   [function-parentheses-space-inside](https://stylelint.io/user-guide/rules/function-parentheses-space-inside/): Require a single space or disallow whitespace on the inside of the parentheses of functions.
-   [function-whitespace-after](https://stylelint.io/user-guide/rules/function-whitespace-after/): Require or disallow whitespace after functions.
-   [function-url-quotes](https://stylelint.io/user-guide/rules/function-url-quotes/): Require or disallow quotes for urls.
-   [keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/): Disallow !important within keyframe declarations.
-   [length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit/): Disallow units for zero lengths.
-   [max-nesting-depth](https://stylelint.io/user-guide/rules/max-nesting-depth/): Limit the depth of nesting.
-   [media-feature-colon-space-after](https://stylelint.io/user-guide/rules/media-feature-colon-space-after/): Require a single space or disallow whitespace after the colon in media features.
-   [media-feature-colon-space-before](https://stylelint.io/user-guide/rules/media-feature-colon-space-before/): Require a single space or disallow whitespace before the colon in media features.
-   [media-feature-range-operator-space-after](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/): Require a single space or disallow whitespace after the range operator in media features.
-   [media-feature-range-operator-space-before](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/): Require a single space or disallow whitespace before the range operator in media features.
-   [media-query-list-comma-space-after](https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/): Require a single space or disallow whitespace after the commas of media query lists.
-   [media-query-list-comma-space-before](https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/): Require a single space or disallow whitespace before the commas of media query lists.
-   [media-feature-parentheses-space-inside](https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/): Require a single space or disallow whitespace on the inside of the parentheses within media features.
-   [no-eol-whitespace](https://stylelint.io/user-guide/rules/no-eol-whitespace/): Disallow end-of-line whitespace.
-   [no-extra-semicolons](https://stylelint.io/user-guide/rules/no-extra-semicolons/): Disallow extra semicolons.
-   [no-missing-end-of-source-newline](https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/): Disallow missing end-of-source newlines.
-   [number-leading-zero](https://stylelint.io/user-guide/rules/number-leading-zero/): Require or disallow a leading zero for fractional numbers less than 1.
-   [number-no-trailing-zeros](https://stylelint.io/user-guide/rules/number-no-trailing-zeros/): Disallow trailing zeros in numbers.
-   [property-case](https://stylelint.io/user-guide/rules/property-case/): Specify lowercase or uppercase for properties.
-   [property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown/): Disallow unknown properties.
-   [selector-attribute-brackets-space-inside](https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/): Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
-   [selector-attribute-operator-space-after](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/): Require a single space or disallow whitespace after operators within attribute selectors.
-   [selector-attribute-operator-space-before](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/): Require a single space or disallow whitespace before operators within attribute selectors.
-   [selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes/): Require or disallow quotes for attribute values.
-   [selector-combinator-space-after](https://stylelint.io/user-guide/rules/selector-combinator-space-after/): Require a single space or disallow whitespace after the combinators of selectors.
-   [selector-combinator-space-before](https://stylelint.io/user-guide/rules/selector-combinator-space-before/): Require a single space or disallow whitespace before the combinators of selectors.
-   [selector-descendant-combinator-no-non-space](https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/): Disallow non-space characters for descendant combinators of selectors.
-   [selector-list-comma-newline-after](https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/): Require a newline or disallow whitespace after the commas of selector lists.
-   [selector-list-comma-space-before](https://stylelint.io/user-guide/rules/selector-list-comma-space-before/): Require a single space or disallow whitespace before the commas of selector lists.
-   [selector-list-comma-space-after](https://stylelint.io/user-guide/rules/selector-list-comma-space-after/): Require a single space or disallow whitespace after the commas of selector lists.
-   [selector-max-compound-selectors](https://stylelint.io/user-guide/rules/selector-max-compound-selectors/): Limit the number of compound selectors in a selector.
-   [selector-max-specificity](https://stylelint.io/user-guide/rules/selector-max-specificity/): Limit the specificity of selectors.
-   [selector-no-vendor-prefix](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/): Disallow vendor prefixes for selectors.
-   [selector-pseudo-element-case](https://stylelint.io/user-guide/rules/selector-pseudo-element-case/): Specify lowercase or uppercase for pseudo-element selectors.
-   [selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/): Specify single or double colon notation for applicable pseudo-elements.
-   [selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/): Disallow unknown pseudo-element selectors.
-   [selector-max-empty-lines](https://stylelint.io/user-guide/rules/selector-max-empty-lines/): Limit the number of adjacent empty lines within selectors.
-   [shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/): Disallow redundant values in shorthand properties.
-   [string-quotes](https://stylelint.io/user-guide/rules/string-quotes/): Specify single or double quotes around strings.
-   [string-no-newline](https://stylelint.io/user-guide/rules/string-no-newline/): Disallow (unescaped) newlines in strings.
-   [unit-case](https://stylelint.io/user-guide/rules/unit-case/): Specify lowercase or uppercase for units.
-   [unit-no-unknown](https://stylelint.io/user-guide/rules/unit-no-unknown/): Disallow unknown units.
-   [value-list-comma-newline-after](https://stylelint.io/user-guide/rules/value-list-comma-newline-after/): Require a newline or disallow whitespace after the commas of value lists.
-   [value-list-comma-newline-before](https://stylelint.io/user-guide/rules/value-list-comma-newline-before/): Require a newline or disallow whitespace before the commas of value lists.
-   [value-list-comma-space-after](https://stylelint.io/user-guide/rules/value-list-comma-space-after/): Require a single space or disallow whitespace after the commas of value lists.
-   [value-list-comma-space-before](https://stylelint.io/user-guide/rules/value-list-comma-space-before/): Require a single space or disallow whitespace before the commas of value lists.
-   [value-list-max-empty-lines](https://stylelint.io/user-guide/rules/value-list-max-empty-lines/): Limit the number of adjacent empty lines within value lists.
-   [value-no-vendor-prefix](https://stylelint.io/user-guide/rules/value-no-vendor-prefix/): Disallow vendor prefixes for values.


## [Changelog](CHANGELOG.md)

## [License](LICENSE)
