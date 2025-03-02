const { test } = require("node:test");
const assert = require("assert");
const isPalindrome = require("./valid-palindrome");

test("Valid palindromes", () => {
  assert.strictEqual(isPalindrome("A man, a plan, a canal: Panama"), true);
  assert.strictEqual(isPalindrome("racecar"), true);
  assert.strictEqual(isPalindrome("No lemon, no melon"), true);
  assert.strictEqual(isPalindrome(" "), true); // Empty string is a palindrome
  assert.strictEqual(isPalindrome("Able was I, I saw Elba"), true);
});

test("Invalid palindromes", () => {
  assert.strictEqual(isPalindrome("race a car"), false);
  assert.strictEqual(isPalindrome("hello world"), false);
  assert.strictEqual(isPalindrome("123abc321"), false);
});

test("Edge cases", () => {
  assert.strictEqual(isPalindrome("a"), true); // Single character
  assert.strictEqual(isPalindrome("aa"), true); // Two same characters
  assert.strictEqual(isPalindrome("ab"), false); // Two different characters
  assert.strictEqual(isPalindrome("12321"), true); // Numeric palindrome
  assert.strictEqual(isPalindrome("123456"), false); // Non-palindrome numbers
});
