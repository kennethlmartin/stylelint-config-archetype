/**
 * @module .eslintrc
 * @see https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  'env': {
    'node': true,
  },
  'extends': [
    'archetype/rules/eslint/best-practices.js',
    'archetype/rules/eslint/errors.js',
    'archetype/rules/eslint/style.js',
    'archetype/rules/eslint/variables.js',
  ],
  'rules': {
    // Require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'always'],
  }
};
