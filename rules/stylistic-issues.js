/* eslint no-magic-numbers: "off" */
'use strict';

module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', 'stroustrup', {allowSingleLine: false}],
    'camelcase': ['error', {properties: 'always'}],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-length': ['error', {
      min: 2,
      max: 35,
      properties: 'always',
      exceptions: ['_', 'i', 'P']
    }],
    'id-match': 'off',
    'indent': ['error', 2, {SwitchCase: 1}],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: false,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false
    }],
    'max-depth': ['error', 3],
    'max-len': ['error', {code: 120, tabWidth: 4, ignoreUrls: true}],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': ['error', 15],
    'new-cap': ['error', {newIsCap: true, capIsNew: true}],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-spaced-func': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed', {keywords: true}],
    'quotes': ['error', 'single', 'avoid-escape'],
    'require-jsdoc': 'off',
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {before: false, after: true}],
    'sort-imports': 'off',
    'sort-vars': ['error', {ignoreCase: false}],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', {int32Hint: false}],
    'space-unary-ops': ['error', {words: true, nonwords: false}],
    'spaced-comment': ['error', 'always', {exceptions: ['+', '-', '=']}],
    'wrap-regex': 'error'
  }
};
