/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let count = {};
  
  for (let i = 0; i < nums.length; i++) {
        count[i] = nums[i]
    
  }
console.log(JSON.stringify(count));

  for (let i = 0; i < nums.length; i++) {
    let complemento = target - nums[i]
    if(nums.includes(complemento)){
        return [count[i], count[Object.values(count).indexOf(complemento)]]; 
    }
  }
}

console.log(twoSum([5,7,15,8],20));