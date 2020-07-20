# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [UNRELEASED]
No current unreleased changes.

## [3.0.0] - 2020-07-20
### Added
- Include new rule definitions:
  - `alpha-value-notation`
  - `at-rule-property-requirelist`
  - `block-opening-brace-newline-before`
  - `color-function-notation`
  - `function-calc-no-invalid`
  - `function-comma-newline-before`
  - `hue-degree-notation`
  - `linebreaks`
  - `max-line-length`
  - `media-query-list-comma-newline-before`
  - `no-empty-first-line`
  - `unicode-bom`
- Styled Components specific rule definitions.

### Changed
- Upgrade `stylelint` dependency to `13.6.1`
- Upgrade `stylelint-order` dependency to `4.1.0`
- `selector-pseudo-element-colon-notation` - change *single* to *double*

### Removed
- Removed deprecated rules:
  - `shorthand-property-no-redundant-values`

## [2.0.0] - 2018-11-21
### Changed
- Upgrade `stylelint` dependency to `9.8.0`
- Upgrade `stylelint-order` dependency to `2.0.0`

## [1.1.0] - 2018-11-08
### Changed
- Upgrade `stylelint` dependency to `9.7.1`

## [1.0.0] - 2018-09-30
Initial release.
