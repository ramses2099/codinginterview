import { expect, test } from "vitest";
import { twoSum } from "./EasyProblem";

test("twoSum Example 1", () => {
  //Example 1
  //Input: nums = [2,7,11,15], target = 9
  const nums: number[] = [2,7,11,15];
  const target:number = 9;

  // Output: [0,1]
  const output: number[] = [0,1];

  expect(twoSum(nums, target)).toEqual(output);

});

test("twoSum Example 2", () => {
    //Example 1
    //Input: nums = [3,2,4], target = 6
    const nums: number[] = [3,2,4];
    const target:number = 6;
  
    // Output: [0,1]
    const output: number[] = [1,2];
  
    expect(twoSum(nums, target)).toEqual(output);
  
  });

  test("twoSum Example 3", () => {
    //Example 1
    //Input: nums = [3,3], target = 6
    const nums: number[] =  [3,3];
    const target:number = 6;
  
    // Output: Output: [0,1]
    const output: number[] = [0,1];
  
    expect(twoSum(nums, target)).toEqual(output);
  
  });
  
  test("twoSum Example 4", () => {
    //Example 4
    //Input: nums = [3,2,3], target = 6
    const nums: number[] =  [3,2,3];
    const target:number = 6;
  
    // Output: Output: [0,1]
    const output: number[] = [0,2];
  
    expect(twoSum(nums, target)).toEqual(output);
  
  });
  

  
  test("twoSum Example 5", () => {
    //Example 5
    //Input: nums = [2,5,5,11], target = 10
    const nums: number[] =  [2,5,5,11];
    const target:number = 10;
  
    // Output: Output: [1,2]
    const output: number[] = [1,2];
  
    expect(twoSum(nums, target)).toEqual(output);
  
  });