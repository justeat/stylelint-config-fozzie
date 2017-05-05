// http://eslint.org/docs/user-guide/configuring#configuring-rules
module.exports = {

    extends: [
        '@justeat/eslint-config-fozzie', // Extending the AirBnB ES2015 config: https://www.npmjs.com/package/eslint-config-airbnb
    ],

    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    }
};
