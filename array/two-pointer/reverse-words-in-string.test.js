const assert = require('assert');
const { test } = require('node:test');
const reverseWords = require('./reverse-words-in-string');

test('Reverse words in a sentence', () => {
    assert.strictEqual(reverseWords("the sky is blue"), "blue is sky the");
    assert.strictEqual(reverseWords("  hello world  "), "world hello");
    assert.strictEqual(reverseWords("a good   example"), "example good a");
})