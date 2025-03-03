/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate (nums) {
    const count = {}

    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]]) {
          count[nums[i]]+=1;
          return true
        } else {
          count[nums[i]] = 1;
        }
    }
    return false
};


module.exports = containsDuplicate