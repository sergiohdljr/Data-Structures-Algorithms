/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  s = s.split("");
  let lo = 0;
  let hi = s.length - 1;
  let index = 0;

  while (lo <= hi) {
    if (["a", "e", "i", "o", "u"].includes(s[lo].toLocaleLowerCase())) {
      if (["a", "e", "i", "o", "u"].includes(s[hi].toLocaleLowerCase())) {
        [s[lo], s[hi]] = [s[hi], s[lo]];
        lo++;
        hi--;
      } else {
        hi--;
      }
    } else {
        lo++
    }
    index++;
  }

  return s.join('');
}

module.exports = reverseVowels