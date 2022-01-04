/**
 * Stylelint Rules - Limit Language Features
 * https://stylelint.io/user-guide/rules/#limit-language-features
 */

module.exports = {
  rules: {
    /**
     * Specify percentage or number notation for alpha-values (Autofixable).​
     *
     * @see https://stylelint.io/user-guide/rules/alpha-value-notation
     */
    'alpha-value-notation': 'number',

    /**
     * Specify a list of allowed at-rules.
     *
     * @see https://stylelint.io/user-guide/rules/at-rule-allowed-list
     */
    'at-rule-allowed-list': null,

    /**
     * Specify a list of disallowed at-rules.
     *
     * @see https://stylelint.io/user-guide/rules/at-rule-disallowed-list
     */
    'at-rule-disallowed-list': null,

    /**
     * Disallow vendor prefixes for at-rules (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
     */
    'at-rule-no-vendor-prefix': true,

    /**
     * Specify a list of required properties for an at-rule.​
     *
     * @see https://stylelint.io/user-guide/rules/at-rule-property-required-list
     */
    'at-rule-property-required-list': null,

    /**
     * Specify modern or legacy notation for applicable color-functions (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/color-function-notation
     */
    'color-function-notation': 'legacy',

    /**
     * Require or disallow alpha channel for hex colors.
     *
     * @see https://stylelint.io/user-guide/rules/color-hex-alpha
     */
    'color-hex-alpha': null,

    /**
     * Require (where possible) or disallow named colors.
     *
     * @see https://stylelint.io/user-guide/rules/color-named
     */
    'color-named': 'never',

    /**
     * Disallow hex colors.​
     *
     * @see https://stylelint.io/user-guide/rules/color-no-hex
     */
    'color-no-hex': null,

    /**
     * Specify a pattern for comments.
     *
     * @see https://stylelint.io/user-guide/rules/comment-pattern
     */
    'comment-pattern': null,

    /**
     * Specify a list of disallowed words within comments.​
     *
     * @see https://stylelint.io/user-guide/rules/comment-word-disallowed-list
     */
    'comment-word-disallowed-list': null,

    /**
     * Specify a pattern for custom media query names.​
     *
     * @see https://stylelint.io/user-guide/rules/custom-media-pattern
     */
    'custom-media-pattern': null,

    /**
     * Specify a pattern for custom properties.​
     *
     * @see https://stylelint.io/user-guide/rules/custom-property-pattern
     */
    'custom-property-pattern': null,

    /**
     * Disallow longhand properties that can be combined into one shorthand property.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longha
     */
    'declaration-block-no-redundant-longhand-properties': null,

    /**
     * Limit the number of declarations within a single-line declaration block.​
     *
     * @see https://stylelint.io/user-guide/rules/declaration-block-single-line-m
     */
    'declaration-block-single-line-max-declarations': 1,

    /**
     * Disallow !important within declarations.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-no-important
     */
    'declaration-no-important': true,

    /**
     * Specify a list of allowed property and unit pairs within declarations.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list
     */
    'declaration-property-unit-allowed-list': null,

    /**
     * Specify a list of disallowed property and unit pairs within declarations.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list
     */
    'declaration-property-unit-disallowed-list': null,

    /**
     * Specify a list of allowed property and value pairs within declarations.
     *
     * @see https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list
     */
    'declaration-property-value-allowed-list': null,

    /**
     * Specify a list of disallowed property and value pairs within declarations.​
     *
     * @see https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-l
     */
    'declaration-property-value-disallowed-list': null,

    /**
     * Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.​
     *
     * @see https://stylelint.io/user-guide/rules/font-weight-notation
     */
    'font-weight-notation': 'named-where-possible',

    /**
     * Specify a list of allowed functions.
     *
     * @see https://stylelint.io/user-guide/rules/function-allowed-list
     */
    'function-allowed-list': null,

    /**
     * Specify a list of disallowed functions.
     *
     * @see https://stylelint.io/user-guide/rules/function-disallowed-list
     */
    'function-disallowed-list': null,

    /**
     * Disallow scheme-relative urls.
     *
     * @see https://stylelint.io/user-guide/rules/function-url-no-scheme-relative
     */
    'function-url-no-scheme-relative': null,

    /**
     * Specify a list of allowed URL schemes.
     *
     * @see https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list
     */
    'function-url-scheme-allowed-list': null,

    /**
     * Specify a list of disallowed URL schemes.​
     *
     * @see https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list
     */
    'function-url-scheme-disallowed-list': null,

    /**
     * Specify number or angle notation for degree hues (Autofixable).​
     *
     * @see https://stylelint.io/user-guide/rules/hue-degree-notation
     */
    'hue-degree-notation': 'angle',

    /**
     * Specify a pattern for keyframe names.​
     *
     * @see https://stylelint.io/user-guide/rules/keyframes-name-pattern
     */
    'keyframes-name-pattern': null,

    /**
     * Disallow units for zero lengths (Autofixable).​
     *
     * @see https://stylelint.io/user-guide/rules/length-zero-no-unit
     */
    'length-zero-no-unit': true,

    /**
     * Limit the depth of nesting.
     *
     * @see https://stylelint.io/user-guide/rules/max-nesting-depth
     */
    'max-nesting-depth': 4,

    /**
     * Specify a list of allowed media feature names.
     *
     * @see https://stylelint.io/user-guide/rules/media-feature-name-allowed-list
     */
    'media-feature-name-allowed-list': null,

    /**
     * Specify a list of disallowed media feature names.
     *
     * @see https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list
     */
    'media-feature-name-disallowed-list': null,

    /**
     * Disallow vendor prefixes for media feature names (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
     */
    'media-feature-name-no-vendor-prefix': true,

    /**
     * Specify a list of allowed media feature name and value pairs.​
     *
     * @see https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list
     */
    'media-feature-name-value-allowed-list': null,

    /**
     * Disallow unknown animations.
     *
     * @see https://stylelint.io/user-guide/rules/no-unknown-animations
     */
    'no-unknown-animations': true,

    /**
     * Limit the number of decimal places allowed in numbers.​
     *
     * @see https://stylelint.io/user-guide/rules/number-max-precision
     */
    'number-max-precision': 2,

    /**
     * Specify a list of allowed properties.
     *
     * @see https://stylelint.io/user-guide/rules/property-allowed-list
     */
    'property-allowed-list': null,

    /**
     * Specify a list of disallowed properties.
     *
     * @see https://stylelint.io/user-guide/rules/property-disallowed-list
     */
    'property-disallowed-list': null,

    /**
     * Disallow vendor prefixes for properties (Autofixable).​
     *
     * @see https://stylelint.io/user-guide/rules/property-no-vendor-prefix
     */
    'property-no-vendor-prefix': true,

    /**
     * Specify a list of disallowed properties for selectors within rules.​
     *
     * @see https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list
     */
    'rule-selector-property-disallowed-list': null,

    /**
     * Specify a list of disallowed attribute names.
     *
     * @see https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list
     */
    'selector-attribute-name-disallowed-list': null,

    /**
     * Specify a list of allowed attribute operators.
     *
     * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list
     */
    'selector-attribute-operator-allowed-list': null,

    /**
     * Specify a list of disallowed attribute operators.
     *
     * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-l
     */
    'selector-attribute-operator-disallowed-list': null,

    /**
     * Specify a pattern for class selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-class-pattern
     */
    'selector-class-pattern': null,

    /**
     * Specify a list of allowed combinators.
     *
     * @see https://stylelint.io/user-guide/rules/selector-combinator-allowed-list
     */
    'selector-combinator-allowed-list': null,

    /**
     * Specify a list of disallowed combinators.
     *
     * @see https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list
     */
    'selector-combinator-disallowed-list': null,

    /**
     * Specify a list of disallowed selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-disallowed-list
     */
    'selector-disallowed-list': null,

    /**
     * Specify a pattern for ID selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-id-pattern
     */
    'selector-id-pattern': null,

    /**
     * Limit the number of attribute selectors in a selector.
     *
     * @see https://stylelint.io/user-guide/rules/selector-max-attribute
     */
    'selector-max-attribute': null,

    /**
     * Limit the number of classes in a selector.
     *
     * @see https://stylelint.io/user-guide/rules/selector-max-class
     */
    'selector-max-class': null,

    /**
     * Limit the number of combinators in a selector.
     *
     * @see https://stylelint.io/user-guide/rules/selector-max-combinators
     */
    'selector-max-combinators': null,

    /**
     * Limit the number of compound selectors in a selector.
     *
     * @see https://stylelint.io/user-guide/rules/selector-max-compound-selectors
     */
    'selector-max-compound-selectors': null,

    /**
     * Limit the number of adjacent empty lines within selectors (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/selector-max-empty-lines
     */
    'selector-max-empty-lines': null,

    /**
     * Limit the number of ID selectors in a selector.
     *
     * @see https://stylelint.io/user-guide/rules/selector-max-id
     */
    'selector-max-id': 1,

    /**
     * Limit the number of pseudo-classes in a selector.
     *
     * @see https://stylelint.io/user-guide/rules/selector-max-pseudo-class
     */
    'selector-max-pseudo-class': null,

    /**
     * Limit the specificity of selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-max-specificity
     */
    'selector-max-specificity': null,

    /**
     * Limit the number of type in a selector.
     *
     * @see https://stylelint.io/user-guide/rules/selector-max-type
     */
    'selector-max-type': null,

    /**
     * Limit the number of universal selectors in a selector.
     *
     * @see https://stylelint.io/user-guide/rules/selector-max-universal
     */
    'selector-max-universal': 1,

    /**
     * Specify a pattern for the selectors of rules nested within rules.
     *
     * @see https://stylelint.io/user-guide/rules/selector-nested-pattern
     */
    'selector-nested-pattern': null,

    /**
     * Disallow qualifying a selector by type.
     *
     * @see https://stylelint.io/user-guide/rules/selector-no-qualifying-type
     */
    'selector-no-qualifying-type': null,

    /**
     * Disallow vendor prefixes for selectors (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
     */
    'selector-no-vendor-prefix': true,

    /**
     * Specify a list of allowed pseudo-class selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list
     */
    'selector-pseudo-class-allowed-list': null,

    /**
     * Specify a list of disallowed pseudo-class selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list
     */
    'selector-pseudo-class-disallowed-list': null,

    /**
     * Specify a list of allowed pseudo-element selectors.
     *
     * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list
     */
    'selector-pseudo-element-allowed-list': null,

    /**
     * Specify single or double colon notation for applicable pseudo-elements (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
     */
    'selector-pseudo-element-colon-notation': 'double',

    /**
     * Specify a list of disallowed pseudo-element selectors.​
     *
     * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list
     */
    'selector-pseudo-element-disallowed-list': null,

    /**
     * Disallow redundant values in shorthand properties (Autofixable).​
     *
     * @see https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
     */
    'shorthand-property-no-redundant-values': null,

    /**
     * Specify the minimum number of milliseconds for time values.​
     *
     * @see https://stylelint.io/user-guide/rules/time-min-milliseconds
     */
    'time-min-milliseconds': null,

    /**
     * Specify a list of allowed units.
     *
     * @see https://stylelint.io/user-guide/rules/unit-allowed-list
     */
    'unit-allowed-list': null,

    /**
     * Specify a list of disallowed units.​
     *
     * @see https://stylelint.io/user-guide/rules/unit-disallowed-list
     */
    'unit-disallowed-list': null,

    /**
     * Disallow vendor prefixes for values (Autofixable).​
     *
     * @see https://stylelint.io/user-guide/rules/value-no-vendor-prefix
     */
    'value-no-vendor-prefix': true,
  },
};
