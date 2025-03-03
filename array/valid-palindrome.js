/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome  (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  let lo = 0;
  let hi = s.length - 1;

  
  while (lo < hi) {

    if (s[lo].toLocaleLowerCase() !== s[hi].toLocaleLowerCase()) {
      return false;
    }

    lo++;
    hi--;
  }

  return true;
};

module.exports = isPalindrome
