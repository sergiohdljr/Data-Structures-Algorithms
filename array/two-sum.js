/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let count = new Map()

  for (let i = 0; i < nums.length; i++) {
   
  if (count.has(target - nums[i])) {
    return [count.get(target - nums[i]), i];
  }
    count.set(nums[i], i)
  }
}

module.exports = twoSum
