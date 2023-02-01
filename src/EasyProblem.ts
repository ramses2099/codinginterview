/**
 * 1. Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 */

/**
 *
 * @param nums {number{}}
 * @param target {number}
 * @returns {number[]}
 */
export function twoSum(nums: number[], target: number): number[] {
  let output: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i, j);
        return output;
      }
    }
  }
  return output;
}

//nums = [2,5,5,11], target = 10
//[1,2]
