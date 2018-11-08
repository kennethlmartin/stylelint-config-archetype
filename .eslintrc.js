/**
 * @module .eslintrc
 * @see https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  extends: [
    'archetype/configurations/node'
  ],
  'rules': {
    // Enforce or disallow capitalization of the first letter of a comment
    // http://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['error', 'always', {
      'ignoreConsecutiveComments': true,
      'ignoreInlineComments': true,
    }],

    // Require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'always'],
  }
};
