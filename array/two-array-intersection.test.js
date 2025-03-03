const { test } = require("node:test");
const assert = require("assert");
const intersection = require('./two-array-intersection')


test("Example 1: Intersection is [2]", () => {
  assert.deepStrictEqual(intersection([1, 2, 2, 1], [2, 2]), [2]);
});

test("Example 2: Intersection is [4, 9]", () => {
  const result = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
  assert.deepStrictEqual(new Set(result), new Set([4, 9]));
});

test("No intersection", () => {
  assert.deepStrictEqual(intersection([1, 3, 5], [2, 4, 6]), []);
});

test("Identical arrays", () => {
  assert.deepStrictEqual(intersection([7, 8, 9], [7, 8, 9]), [7, 8, 9]);
});

test("One empty array", () => {
  assert.deepStrictEqual(intersection([], [1, 2, 3]), []);
  assert.deepStrictEqual(intersection([1, 2, 3], []), []);
});

test("Both empty arrays", () => {
  assert.deepStrictEqual(intersection([], []), []);
});

test("Large input with repeated elements", () => {
  const nums1 = new Array(1000).fill(5);
  const nums2 = new Array(1000).fill(5);
  assert.deepStrictEqual(intersection(nums1, nums2), [5]);
});
