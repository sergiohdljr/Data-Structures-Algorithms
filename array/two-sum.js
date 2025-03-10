/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let count = {};

  for (let i = 0; i < nums.length; i++) {
  let complemento = target - nums[i];

  if (count.hasOwnProperty(complemento)) {
    return [count[complemento], i];
  }
    count[nums[i]] = i;
  }
}

module.exports = twoSum