// http://eslint.org/docs/user-guide/configuring#configuring-rules
module.exports = {

    extends: [
        'airbnb-base', // Extending the AirBnB ES2015 config: https://www.npmjs.com/package/eslint-config-airbnb
    ],

    // Rule overrides: see http://eslint.org/docs/rules/
    rules: {
        'max-len': [1, 200, 4],
        'indent': ['error', 4],
        'padded-blocks': 0, // http://eslint.org/docs/rules/padded-blocks
        'prefer-arrow-callback': 1,
        'no-var': 'off',
        'one-var': 'off',
        'func-names': 'off',
        'spaced-comment': 'off',
        'comma-dangle': ['error', 'never'], // http://eslint.org/docs/rules/comma-dangle
        'space-before-function-paren': ['error', 'always'],
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'minimum' }],
        'no-param-reassign': ['error', { 'props': false }],
        'one-var-declaration-per-line': ['error', 'initializations'],
        'guard-for-in': 'off',
        'object-shorthand': ['error', 'properties'],
        'no-unused-expressions': 'off',
        'no-multiple-empty-lines': ['error', {'max': 4}],
        'no-console': 'off',
        'no-plusplus': 'off',
        'no-use-before-define': 'off',
        'no-underscore-dangle': 'off',
        'linebreak-style': 'off',
        'arrow-parens': 'off',

        // temp addons to suppress errors before reworking
        'no-prototype-builtins': 'off',
        'no-restricted-syntax': 'off', //https://github.com/airbnb/javascript/issues/851
        'no-mixed-operators': 'off',
        'import/prefer-default-export': 'off'
    },

    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
};
