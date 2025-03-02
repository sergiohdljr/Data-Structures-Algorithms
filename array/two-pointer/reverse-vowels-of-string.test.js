const assert = require("assert");
const test = require("node:test");
const reverseVowels = require("./reverse-vowels-of-string");

test("Casos básicos", () => {
  assert.strictEqual(reverseVowels("hello"), "holle");
  assert.strictEqual(reverseVowels("leetcode"), "leotcede");
});

test("Casos especiais", () => {
  assert.strictEqual(reverseVowels(""), ""); // String vazia
  assert.strictEqual(reverseVowels("a"), "a"); // Apenas uma vogal
  assert.strictEqual(reverseVowels("rhythm"), "rhythm"); // Sem vogais
});

test("Maiúsculas e minúsculas", () => {
  assert.strictEqual(reverseVowels("HELLO"), "HOLLE");
  assert.strictEqual(reverseVowels("hElLo"), "holLE");
});

test("Strings com caracteres especiais e números", () => {
  assert.strictEqual(reverseVowels("a!e@i#o$u"), "u!o@i#e$a");
  assert.strictEqual(reverseVowels("h3ll0"), "h3ll0"); // Sem vogais para inverter
  assert.strictEqual(reverseVowels("h3e2o1"), "h3o2e1");
});
