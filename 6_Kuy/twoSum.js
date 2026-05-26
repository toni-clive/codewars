// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
// Tags 
// Arrays
// Fundamentals
// Algorithms
function twoSum(numbers, target) {
  let nums = {}
  for(let i =0;i<numbers.length;i++){
    if(nums[target-numbers[i]]!=undefined){
      return [nums[target-numbers[i]],i]
    }
    nums[numbers[i]] =i
  }
  return false
}