const { test } = require("node:test");
const assert = require("node:assert");
const majorityElement = require('./majority-element')


test("Example 1: Majority element is 3", () => {
  assert.strictEqual(majorityElement([3, 2, 3]), 3);
});

test("Example 2: Majority element is 2", () => {
  assert.strictEqual(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
});

test("Edge Case: Single element array", () => {
  assert.strictEqual(majorityElement([99]), 99);
});

test("Edge Case: All elements are the same", () => {
  assert.strictEqual(majorityElement([7, 7, 7, 7, 7]), 7);
});

test("Edge Case: Majority element is at the beginning", () => {
  assert.strictEqual(majorityElement([8, 8, 8, 2, 3, 8, 8, 8]), 8);
});

test("Edge Case: Majority element is at the end", () => {
  assert.strictEqual(majorityElement([1, 2, 3, 3, 3, 3, 3]), 3);
});

test("Large input: Majority element in a large array", () => {
  const largeArray = new Array(100001).fill(5);
  assert.strictEqual(majorityElement(largeArray), 5);
});
