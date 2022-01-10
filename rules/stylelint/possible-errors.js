/**
 * Stylelint Rules - Possible Errors
 * @see https://stylelint.io/user-guide/rules/list/#possible-errors
 */

module.exports = {
  rules: {
    /**
     * Disallow unknown at-rules.​
     *
     * @see https://stylelint.io/user-guide/rules/list/at-rule-no-unknown
     */
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extend'],
      },
    ],

    /**
     * Disallow empty blocks.​
     *
     * @see https://stylelint.io/user-guide/rules/list/block-no-empty
     */
    'block-no-empty': true,

    /**
     * Disallow invalid hex colors.​
     *
     * @see https://stylelint.io/user-guide/rules/list/color-no-invalid-hex
     */
    'color-no-invalid-hex': true,

    /**
     * Disallow empty comments.​
     *
     * @see https://stylelint.io/user-guide/rules/list/comment-no-empty
     */
    'comment-no-empty': true,

    /**
     * Disallow missing var function for custom properties.​
     *
     * @see https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function
     */
    'custom-property-no-missing-var-function': true,

    /**
     * Disallow duplicate custom properties within declaration blocks.
     *
     * @see https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-custom-properties
     */
    'declaration-block-no-duplicate-custom-properties': true,

    /**
     * Disallow duplicate properties within declaration blocks.
     *
     * @see https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties
     */
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],

    /**
     * Disallow shorthand properties that override related longhand properties.​
     *
     * @see https://stylelint.io/user-guide/rules/list/declaration-block-no-shorthand-property-overrides
     */
    'declaration-block-no-shorthand-property-overrides': true,

    /**
     * Disallow duplicate font family names.
     *
     * @see https://stylelint.io/user-guide/rules/list/font-family-no-duplicate-names
     */
    'font-family-no-duplicate-names': true,

    /**
     * Disallow missing generic families in lists of font family names.​
     *
     * @see https://stylelint.io/user-guide/rules/list/font-family-no-missing-generic-family-keyword
     */
    'font-family-no-missing-generic-family-keyword': true,

    /**
     * Disallow an unspaced operator within calc functions.
     *
     * @see https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator
     */
    'function-calc-no-unspaced-operator': true,

    /**
     * Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.​
     *
     * @see https://stylelint.io/user-guide/rules/list/function-linear-gradient-no-nonstandard-direction
     */
    'function-linear-gradient-no-nonstandard-direction': true,

    /**
     * Disallow !important within keyframe declarations.​
     *
     * @see https://stylelint.io/user-guide/rules/list/keyframe-declaration-no-important
     */
    'keyframe-declaration-no-important': true,

    /**
     * Disallow unknown media feature names.​
     *
     * @see https://stylelint.io/user-guide/rules/list/media-feature-name-no-unknown
     */
    'media-feature-name-no-unknown': true,

    /**
     * Disallow invalid named grid areas.​
     *
     * @see https://stylelint.io/user-guide/rules/list/named-grid-areas-no-invalid
     */
    'named-grid-areas-no-invalid': null,

    /**
     * Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
     *
     * @see https://stylelint.io/user-guide/rules/list/no-descending-specificity
     */
    'no-descending-specificity': true,

    /**
     * Disallow duplicate @import rules within a stylesheet.
     *
     * @see https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules
     */
    'no-duplicate-at-import-rules': true,

    /**
     * Disallow duplicate selectors within a stylesheet.
     *
     * @see https://stylelint.io/user-guide/rules/list/no-duplicate-selectors
     */
    'no-duplicate-selectors': true,

    /**
     * Disallow empty sources.
     *
     * @see https://stylelint.io/user-guide/rules/list/no-empty-source
     */
    'no-empty-source': true,

    /**
     * Disallow extra semicolons (Autofixable).
     *
     * @see https://stylelint.io/user-guide/rules/list/no-extra-semicolons
     */
    'no-extra-semicolons': true,

    /**
     * Disallow double-slash comments (//...) which are not supported by CSS.
     *
     * @see https://stylelint.io/user-guide/rules/list/no-invalid-double-slash-comments
     */
    'no-invalid-double-slash-comments': true,

    /**
     * Disallow invalid position @import rules within a stylesheet.
     *
     * @see https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule
     */
    'no-invalid-position-at-import-rule': null,

    /**
     * Disallow unknown properties.​
     *
     * @see https://stylelint.io/user-guide/rules/list/property-no-unknown
     */
    'property-no-unknown': null,

    /**
     * Disallow unknown pseudo-class selectors.
     *
     * @see https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown
     */
    'selector-pseudo-class-no-unknown': null,

    /**
     * Disallow unknown pseudo-element selectors.
     *
     * @see https://stylelint.io/user-guide/rules/list/selector-pseudo-element-no-unknown
     */
    'selector-pseudo-element-no-unknown': null,

    /**
     * Disallow unknown type selectors.​
     *
     * @see https://stylelint.io/user-guide/rules/list/selector-type-no-unknown
     */
    'selector-type-no-unknown': null,

    /**
     * Disallow (unescaped) newlines in strings.​
     *
     * @see https://stylelint.io/user-guide/rules/list/string-no-newline
     */
    'string-no-newline': null,

    /**
     * Disallow unknown units.​
     *
     * @see https://stylelint.io/user-guide/rules/list/unit-no-unknown
     */
    'unit-no-unknown': null,
  },
};
