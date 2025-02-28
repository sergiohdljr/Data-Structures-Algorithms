/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  let l = 0;
  let r = 0;
  let words = [];
  let phase = s.trim().replace(/\s+/g, " ");
  while (r < phase.length) {
    if (phase[r] != " ") {
      r += 1;
    } else {
      words.push(phase.substring(l, r));
      r += 1;
      l = r;
    }
  }

  words.push(phase.substring(l, r));

  return words.reverse().join(" ");
};

module.exports = reverseWords;
