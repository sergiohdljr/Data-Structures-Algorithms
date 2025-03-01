/**
 * Binary search.
 * @param {Array} array
 * @param {number} n
 */
function binarySearch(array, n) {
  let esquerda = 0;
  let direita = array.length - 1;

  while (esquerda <= direita) {
    let mid = Math.floor((direita + esquerda) / 2);

    if (array[mid] === n) {
      return mid;
    }

    if (array[mid] < n) {
      esquerda = mid + 1;
    }

    if (array[mid] > n) {
      direita = mid - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;