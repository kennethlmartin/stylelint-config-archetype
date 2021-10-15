/**
 * Plugin Order
 * https://github.com/hudochenkov/stylelint-order
 */

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    /**
     * Specify the order of content within declaration blocks.
     *
     * @see https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
     */
    'order/order': ['custom-properties', 'declarations', 'rules'],

    /**
     * Specify the alphabetical order of properties within declaration blocks.
     *
     * @see https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md
     */
    'order/properties-alphabetical-order': true,

    /**
     * Specify the order of properties within declaration blocks.
     *
     * @see https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
     */
    'order/properties-order': null,
  },
};
