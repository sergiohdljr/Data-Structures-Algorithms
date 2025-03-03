/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement (nums) {
     const count = {};

      if (nums.length === 1) {
        return nums[0];
      }

     for (let i = 0; i < nums.length; i++) {
       if (count[nums[i]]) {
         count[nums[i]] += 1;
         if (count[nums[i]] > (nums.length / 2)) {
           return nums[i];
         }
       } else {
         count[nums[i]] = 1;
       }
     }

};

module.exports = majorityElement