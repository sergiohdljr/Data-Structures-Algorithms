const assert = require("assert");
const { test } = require("node:test");
const twoSum = require("./two-sum"); // Supondo que a função esteja em 'twoSum.js'

test("Caso de teste 1", () => {
  assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9).sort(), [0, 1]);
});

test("Caso de teste 2", () => {
  assert.deepStrictEqual(twoSum([3, 2, 4], 6).sort(), [1, 2]);
});

test("Caso de teste 3", () => {
  assert.deepStrictEqual(twoSum([3, 3], 6).sort(), [0, 1]);
});

test("Caso de teste com números negativos", () => {
  assert.deepStrictEqual(twoSum([-1, -2, -3, -4, -5], -8).sort(), [2, 4]);
});

test("Caso de teste com números grandes", () => {
  assert.deepStrictEqual(
    twoSum([100000000, 299, 70000000, 1000000000], 100000299).sort(),
    [0, 1]
  );
});

