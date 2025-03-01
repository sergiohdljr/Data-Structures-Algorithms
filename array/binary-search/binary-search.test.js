const { test } = require("node:test");
const assert = require("assert");
const binarySearch = require("./binary-search");

test("Encontra um elemento existente", () => {
  const arr = [1, 3, 5, 7, 9, 11, 13, 15];
  assert.strictEqual(binarySearch(arr, 7), 3);
  assert.strictEqual(binarySearch(arr, 1), 0);
  assert.strictEqual(binarySearch(arr, 15), 7);
});

test("Retorna -1 para elementos inexistentes", () => {
  const arr = [1, 3, 5, 7, 9, 11, 13, 15];
  assert.strictEqual(binarySearch(arr, 2), -1);
  assert.strictEqual(binarySearch(arr, 10), -1);
  assert.strictEqual(binarySearch(arr, 16), -1);
});

test("Testa lista vazia", () => {
  assert.strictEqual(binarySearch([], 5), -1);
});

test("Testa lista com um único elemento", () => {
  assert.strictEqual(binarySearch([10], 10), 0);
  assert.strictEqual(binarySearch([10], 5), -1);
});

test("Testa lista com dois elementos", () => {
  assert.strictEqual(binarySearch([3, 7], 3), 0);
  assert.strictEqual(binarySearch([3, 7], 7), 1);
  assert.strictEqual(binarySearch([3, 7], 5), -1);
});
