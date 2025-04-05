/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let count = new Map()

  for (let i = 0; i < nums.length; i++) {
  let complemento = target - nums[i];

  if (count.has(complemento)) {
    return [count.get(complemento), i];
  }
    count.set(nums[i], i)
  }
}

module.exports = twoSum