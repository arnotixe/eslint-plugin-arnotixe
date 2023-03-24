// no-hyphens-in-date.spec.js
const { RuleTester } = require('eslint');
const noHyphensInDateRule = require('../lib/no-hyphens-in-date.js');
const ruleTester = new RuleTester();
ruleTester.run('no-hyphens-in-date', noHyphensInDateRule, {
    valid: [{
        code: 'good = new Date("2023/1/1");',
    }],
    invalid: [{
        code: 'bad = new Date("2023-1-1");',
        errors: [{ messageId: 'noHyphens' }],
    }]
});
