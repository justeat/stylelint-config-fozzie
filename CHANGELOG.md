# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v2.0.1
------------------------------
*January 17, 2018*

### Added
-   `stylelint-scss` as a Peer Dependency

v2.0.0
------------------------------
*January 16, 2018*

### Added
-   Some new checks:
    -   [declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/) set to `true` except for duplicates with different values
    -   [font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/#font-family-no-duplicate-names) set to `true`
    -   [media-feature-name-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/#media-feature-name-no-unknown) set to `true`
    -   [number-max-precision](https://stylelint.io/user-guide/rules/number-max-precision/#number-max-precision) set to `3`
    -   [selector-max-class](https://stylelint.io/user-guide/rules/selector-max-class/#selector-max-class) set to 4
    -   [selector-pseudo-class-case](https://stylelint.io/user-guide/rules/selector-pseudo-class-case/#selector-pseudo-class-case) set to lower
    -   [selector-pseudo-class-parentheses-space-inside](https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/#selector-pseudo-class-parentheses-space-inside) set to `never`
    -   [selector-type-case](https://stylelint.io/user-guide/rules/selector-type-case/#selector-type-case) set to `lower`
-   Added the `stylelint-scss` plugin to allow for more SCSS specific style checks
    -   [scss/at-rule-no-unknown](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md) set to `true` to disallow unknown `@` rules
    -   [scss/at-function-parentheses-space-before](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md) set to `never`
    -   [scss/dollar-variable-colon-space-after](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/dollar-variable-colon-space-after) set to `always-single-line`

### Changed
-   Stylelint updated to v8.0.0



v1.2.0
------------------------------
*January 09, 2018*

### Added
-   Danger.js has been added to do basic PR checks.  This will leave comments on the PR when the `CHANGELOG` hasn’t been updated, the version needs incrementing or if it thinks the `README` might need an update.
-   Adding Github PR template and CODEOWNERS files
-   Fozzie icon to README (very important!)

### Changed
-   Dependencies updated to latest versions

v1.1.0
------------------------------
*July 28, 2017*

-   Getting rid of `indentation` rule – was complaining of too many things that we didn’t care about, such as when indenting based on hierarchy of naming.

v1.0.0
------------------------------
*July 18, 2017*

-   Initial release of ruleset – based structure on the stylelint-config-standard
