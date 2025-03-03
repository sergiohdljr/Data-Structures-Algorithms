/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const numbersIntersection = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      if (!numbersIntersection.includes(nums1[i])) {
        numbersIntersection.push(nums1[i]);
      }
    }
  }

  return numbersIntersection;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
module.exports = intersection