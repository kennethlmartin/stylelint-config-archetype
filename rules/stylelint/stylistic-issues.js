/**
 * Stylelint Rules - Stylistic Issues
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */

module.exports = {
  rules: {
    /**
     * Require or disallow an empty line before at-rules (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/at-rule-empty-line-before
     */
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],

    /**
     * Specify lowercase or uppercase for at-rules names (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/at-rule-name-case
     */
    'at-rule-name-case': 'lower',

    /**
     * Require a newline after at-rule names.
     *
     * @see https://stylelint.io/user-guide/rules/at-rule-name-newline-after
     */
    'at-rule-name-newline-after': 'always-multi-line',

    /**
     * Require a single space after at-rule names.
     *
     * @see https://stylelint.io/user-guide/rules/at-rule-name-space-after
     */
    'at-rule-name-space-after': 'always-single-line',

    /**
     * Require a newline after the semicolon of at-rules.
     *
     * @see https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after
     */
    'at-rule-semicolon-newline-after': 'always',

    /**
     * Require a single space or disallow whitespace before the semicolons of at rules.
     *
     * @see https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before
     */
    'at-rule-semicolon-space-before': 'never',

    /**
     * Require or disallow an empty line before the closing brace of blocks.
     *
     * @see https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before
     */
    'block-closing-brace-empty-line-before': 'never',

    /**
     * Require a newline or disallow whitespace after the closing brace of blocks.
     *
     * @see https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
     */
    'block-closing-brace-newline-after': 'always',

    /**
     * Require a newline or disallow whitespace before the closing brace of blocks.
     *
     * @see https://stylelint.io/user-guide/rules/block-closing-brace-newline-before
     */
    'block-closing-brace-newline-before': 'always-multi-line',

    /**
     * Require a single space or disallow whitespace after the closing brace of blocks.
     *
     * @see https://stylelint.io/user-guide/rules/block-closing-brace-space-after
     */
    'block-closing-brace-space-after': 'always-single-line',

    /**
     * Require a single space or disallow whitespace before the closing brace of blocks.
     *
     * @see https://stylelint.io/user-guide/rules/block-closing-brace-space-before
     */
    'block-closing-brace-space-before': 'always-single-line',

    /**
     * Require a newline after the opening brace of blocks.
     *
     * @see https://stylelint.io/user-guide/rules/block-opening-brace-newline-after
     */
    'block-opening-brace-newline-after': 'always-multi-line',

    /**
     * Require a newline or disallow whitespace before the opening brace of blocks.
     *
     * @see https://stylelint.io/user-guide/rules/block-opening-brace-newline-before
     */
    'block-opening-brace-newline-before': null,

    /**
     * Require a single space or disallow whitespace after the opening brace of blocks.
     *
     * @see https://stylelint.io/user-guide/rules/block-opening-brace-space-after
     */
    'block-opening-brace-space-after': 'always-single-line',

    /**
     * Require a single space or disallow whitespace before the opening brace of blocks.
     *
     * @see https://stylelint.io/user-guide/rules/block-opening-brace-space-before
     */
    'block-opening-brace-space-before': 'always',

    /**
     * Specify lowercase or uppercase for hex colors (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/color-hex-case
     */
    'color-hex-case': 'lower',

    /**
     * Specify short or long notation for hex colors (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/color-hex-length
     */
    'color-hex-length': 'short',

    /**
     * Require or disallow an empty line before comments (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/comment-empty-line-before
     */
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],

    /**
     * Require or disallow whitespace on the inside of comment markers.
     *
     * @see https://stylelint.io/user-guide/rules/comment-whitespace-inside
     */
    'comment-whitespace-inside': 'always',

    /**
     * Require or disallow an empty line before custom properties (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/custom-property-empty-line-before
     */
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],

    /**
     * Require a single space or disallow whitespace after the bang of declarations.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-bang-space-after
     */
    'declaration-bang-space-after': 'never',

    /**
     * Require a single space or disallow whitespace before the bang of declarations.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-bang-space-before
     */
    'declaration-bang-space-before': 'always',

    /**
     * Require a newline or disallow whitespace after the semicolons of declaration blocks.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after
     */
    'declaration-block-semicolon-newline-after': 'always-multi-line',

    /**
     * Require a newline or disallow whitespace before the semicolons of declaration blocks.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before
     */
    'declaration-block-semicolon-newline-before': 'never-multi-line',

    /**
     * Require a single space or disallow whitespace after the semicolons of declaration blocks.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after
     */
    'declaration-block-semicolon-space-after': 'always-single-line',

    /**
     * Require a single space or disallow whitespace before the semicolons of declaration blocks.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before
     */
    'declaration-block-semicolon-space-before': 'never',

    /**
     * Require or disallow a trailing semicolon within declaration blocks.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon
     */
    'declaration-block-trailing-semicolon': 'always',

    /**
     * Require a newline or disallow whitespace after the colon of declarations.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-colon-newline-after
     */
    'declaration-colon-newline-after': 'always-multi-line',

    /**
     * Require a single space or disallow whitespace after the colon of declarations.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-colon-space-after
     */
    'declaration-colon-space-after': 'always-single-line',

    /**
     * Require a single space or disallow whitespace before the colon of declarations.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-colon-space-before
     */
    'declaration-colon-space-before': 'never',

    /**
     * Require or disallow an empty line before declarations (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/declaration-empty-line-before
     */
    'declaration-empty-line-before': 'never',

    /**
     * Specify whether or not quotation marks should be used around font family names.
     *
     * @see https://stylelint.io/user-guide/rules/font-family-name-quotes
     */
    'font-family-name-quotes': 'always-where-recommended',

    /**
     * Require a newline or disallow whitespace after the commas of functions.
     *
     * @see https://stylelint.io/user-guide/rules/function-comma-newline-after
     */
    'function-comma-newline-after': 'always-multi-line',

    /**
     * Require a newline or disallow whitespace before the commas of functions.
     *
     * @see https://stylelint.io/user-guide/rules/function-comma-newline-before
     */
    'function-comma-newline-before': null,

    /**
     * Require a single space or disallow whitespace after the commas of functions.
     *
     * @see https://stylelint.io/user-guide/rules/function-comma-space-after
     */
    'function-comma-space-after': 'always-single-line',

    /**
     * Require a single space or disallow whitespace before the commas of functios.
     *
     * @see https://stylelint.io/user-guide/rules/function-comma-space-before
     */
    'function-comma-space-before': 'never',

    /**
     * Limit the number of adjacent empty lines within functions.
     *
     * @see https://stylelint.io/user-guide/rules/function-max-empty-lines
     */
    'function-max-empty-lines': 0,

    /**
     * Specify lowercase or uppercase for function names.
     *
     * @see https://stylelint.io/user-guide/rules/function-name-case
     */
    'function-name-case': 'lower',

    /**
     * Require a newline or disallow whitespace on the inside of the parentheses of functions.
     *
     * @see https://stylelint.io/user-guide/rules/function-parentheses-newline-inside
     */
    'function-parentheses-newline-inside': 'always-multi-line',

    /**
     * Require a single space or disallow whitespace on the inside of the parentheses of functions.
     *
     * @see https://stylelint.io/user-guide/rules/function-parentheses-space-inside
     */
    'function-parentheses-space-inside': 'never-single-line',

    /**
     * Require or disallow quotes for urls.
     *
     * @see https://stylelint.io/user-guide/rules/function-url-quotes
     */
    'function-url-quotes': 'always',

    /**
     * Require or disallow whitespace after functions.
     *
     * @see https://stylelint.io/user-guide/rules/function-whitespace-after
     */
    'function-whitespace-after': 'always',

    /**
     * Specify indentation (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/indentation
     */
    'indentation': 2,

    /**
     * Specify unix or windows linebreaks (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/linebreaks
     */
    'linebreaks': 'unix',

    /**
     * Limit the number of adjacent empty lines.
     *
     * @see https://stylelint.io/user-guide/rules/max-empty-lines
     */
    'max-empty-lines': 1,

    /**
     * Limit the length of a line.
     *
     * @see https://stylelint.io/user-guide/rules/max-line-length
     */
    'max-line-length': null,

    /**
     * Require a single space or disallow whitespace after the colon in media features.
     *
     * @see https://stylelint.io/user-guide/rules/media-feature-colon-space-after
     */
    'media-feature-colon-space-after': 'always',

    /**
     * Require a single space or disallow whitespace before the colon in media features.
     *
     * @see https://stylelint.io/user-guide/rules/media-feature-colon-space-before
     */
    'media-feature-colon-space-before': 'never',

    /**
     * Specify lowercase or uppercase for media feature names.
     *
     * @see https://stylelint.io/user-guide/rules/media-feature-name-case
     */
    'media-feature-name-case': 'lower',

    /**
     * Require a single space or disallow whitespace on the inside of the parentheses within media features.
     *
     * @see https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside
     */
    'media-feature-parentheses-space-inside': 'never',

    /**
     * Require a single space or disallow whitespace after the range operator in media features.
     *
     * @see https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after
     */
    'media-feature-range-operator-space-after': 'always',

    /**
     * Require a single space or disallow whitespace before the range operator in media features.
     *
     * @see https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before
     */
    'media-feature-range-operator-space-before': 'always',

    /**
     * Require a newline or disallow whitespace after the commas of media query lists.
     *
     * @see https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after
     */
    'media-query-list-comma-newline-after': 'always-multi-line',

    /**
     * Require a newline or disallow whitespace before the commas of media query lists.
     *
     * @see https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before
     */
    'media-query-list-comma-newline-before': null,

    /**
     * Require a single space or disallow whitespace after the commas of media query lists.
     *
     * @see https://stylelint.io/user-guide/rules/media-query-list-comma-space-after
     */
    'media-query-list-comma-space-after': 'always-single-line',

    /**
     * Require a single space or disallow whitespace before the commas of media query lists.
     *
     * @see https://stylelint.io/user-guide/rules/media-query-list-comma-space-before
     */
    'media-query-list-comma-space-before': 'never',

    /**
     * Disallow empty first lines (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/no-empty-first-line
     */
    'no-empty-first-line': null,

    /**
     * Disallow end-of-line whitespace.
     *
     * @see https://stylelint.io/user-guide/rules/no-eol-whitespace
     */
    'no-eol-whitespace': true,

    /**
     * Disallow irregular whitespaces.
     *
     * @see https://stylelint.io/user-guide/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': null,

    /**
     * Disallow missing end-of-source newlines (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline
     */
    'no-missing-end-of-source-newline': true,

    /**
     * Require or disallow a leading zero for fractional numbers less than 1.
     *
     * @see https://stylelint.io/user-guide/rules/number-leading-zero
     */
    'number-leading-zero': 'always',

    /**
     * Disallow trailing zeros in numbers.
     *
     * @see https://stylelint.io/user-guide/rules/number-no-trailing-zeros
     */
    'number-no-trailing-zeros': true,

    /**
     * Specify lowercase or uppercase for properties.
     *
     * @see https://stylelint.io/user-guide/rules/property-case
     */
    'property-case': 'lower',

    /**
     * Require or disallow an empty line before rules (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/rule-empty-line-before
     */
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],

    /**
     * Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside
     */
    'selector-attribute-brackets-space-inside': 'never',

    /**
     * Require a single space or disallow whitespace after operators within attribute selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after
     */
    'selector-attribute-operator-space-after': 'never',

    /**
     * Require a single space or disallow whitespace before operators within attribute selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before
     */
    'selector-attribute-operator-space-before': 'never',

    /**
     * Require or disallow quotes for attribute values.
     *
     * @see https://stylelint.io/user-guide/rules/selector-attribute-quotes
     */
    'selector-attribute-quotes': 'always',

    /**
     * Require a single space or disallow whitespace after the combinators of selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-combinator-space-after
     */
    'selector-combinator-space-after': 'always',

    /**
     * Require a single space or disallow whitespace before the combinators of selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-combinator-space-before
     */
    'selector-combinator-space-before': 'always',

    /**
     * Disallow non-space characters for descendant combinators of selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-space
     */
    'selector-descendant-combinator-no-non-space': true,

    /**
     * Require a newline or disallow whitespace after the commas of selector lists.
     *
     * @see https://stylelint.io/user-guide/rules/selector-list-comma-newline-after
     */
    'selector-list-comma-newline-after': 'always-multi-line',

    /**
     * Require a newline or disallow whitespace before the commas of selector lists.
     *
     * @see https://stylelint.io/user-guide/rules/selector-list-comma-newline-before
     */
    'selector-list-comma-newline-before': 'never-multi-line',

    /**
     * Require a single space or disallow whitespace after the commas of selector lists.
     *
     * @see https://stylelint.io/user-guide/rules/selector-list-comma-space-after
     */
    'selector-list-comma-space-after': 'always-single-line',

    /**
     * Require a single space or disallow whitespace before the commas of selector lists.
     *
     * @see https://stylelint.io/user-guide/rules/selector-list-comma-space-before
     */
    'selector-list-comma-space-before': 'never',

    /**
     * Specify lowercase or uppercase for pseudo-class selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-case
     */
    'selector-pseudo-class-case': 'lower',

    /**
     * Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside
     */
    'selector-pseudo-class-parentheses-space-inside': 'never',

    /**
     * Specify lowercase or uppercase for pseudo-element selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-case
     */
    'selector-pseudo-element-case': 'lower',

    /**
     * Specify lowercase or uppercase for type selector.
     *
     * @see https://stylelint.io/user-guide/rules/selector-type-case
     */
    'selector-type-case': 'lower',

    /**
     * Specify single or double quotes around strings.
     *
     * @see https://stylelint.io/user-guide/rules/string-quotes
     */
    'string-quotes': 'double',

    /**
     * Require or disallow Unicode BOM.
     *
     * @see https://stylelint.io/user-guide/rules/unicode-bom
     */
    'unicode-bom': 'never',

    /**
     * Specify lowercase or uppercase for units.
     *
     * @see https://stylelint.io/user-guide/rules/unit-case
     */
    'unit-case': 'lower',

    /**
     * Specify lowercase or uppercase for keywords values.
     *
     * @see https://stylelint.io/user-guide/rules/value-keyword-case
     */
    'value-keyword-case': 'lower',

    /**
     * Require a newline or disallow whitespace after the commas of value lists.
     *
     * @see https://stylelint.io/user-guide/rules/value-list-comma-newline-after
     */
    'value-list-comma-newline-after': 'always-multi-line',

    /**
     * Require a newline or disallow whitespace before the commas of value lists.
     *
     * @see https://stylelint.io/user-guide/rules/value-list-comma-newline-before
     */
    'value-list-comma-newline-before': 'never-multi-line',

    /**
     * Require a single space or disallow whitespace after the commas of value lists.
     *
     * @see https://stylelint.io/user-guide/rules/value-list-comma-space-after
     */
    'value-list-comma-space-after': 'always-single-line',

    /**
     * Require a single space or disallow whitespace before the commas of value lists.
     *
     * @see https://stylelint.io/user-guide/rules/value-list-comma-space-before
     */
    'value-list-comma-space-before': 'never',

    /**
     * Limit the number of adjacent empty lines within value lists.
     *
     * @see https://stylelint.io/user-guide/rules/value-list-max-empty-lines
     */
    'value-list-max-empty-lines': 0,
  },
};
