const { test } = require( "node:test");
const assert = require("assert");
const containsDuplicate = require('./contains-duplicate')


// Unit tests
test("Example 1: contains duplicates", () => {
  assert.strictEqual(containsDuplicate([1, 2, 3, 1]), true);
});

test("Example 2: all unique", () => {
  assert.strictEqual(containsDuplicate([1, 2, 3, 4]), false);
});

test("Example 3: multiple duplicates", () => {
  assert.strictEqual(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
});

test("Edge Case: Single element", () => {
  assert.strictEqual(containsDuplicate([42]), false);
});

test("Edge Case: Large array with no duplicates", () => {
  const largeArray = Array.from({ length: 100000 }, (_, i) => i);
  assert.strictEqual(containsDuplicate(largeArray), false);
});

test("Edge Case: Large array with one duplicate", () => {
  const largeArray = Array.from({ length: 99999 }, (_, i) => i).concat(500);
  assert.strictEqual(containsDuplicate(largeArray), true);
});
