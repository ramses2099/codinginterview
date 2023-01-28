/**
 * given a string
 * reverse it
 * reverse('apple')='elppa'
 * reverse('Greetings!')='!sgniteerG'
 */

/**
 *
 * @param str {string}
 * @returns {string}
 */
export const revertString = (str: string): string => {
  const arr = str.split("");
  return arr.reverse().join("");
};

// console.log(revertString('apple'));
// console.log(revertString('Greetings'));


/**
 * find palindrome
 * palindrome('abba')=true
 * palindrome('juan')=false
 */

/**
 *
 * @param str {string}
 * @returns boolean
 */
export const isPalindrome = (str: string): boolean => {
  const arr = str.split("");
  return str === arr.reverse().join("");
};

console.log(isPalindrome("ana"));



/**
 * 1480. Running Sum of 1D Array
 *
 * Example:
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 *
 * Complexity:
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 *
 * @param nums {number[]}
 * @returns number[]
 */
const runnigSum = (nums: number[]): number[] => {
  let result = new Array<number>(nums.length);
  result[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i] + result[i - 1];
  }

  return result;
};

const runnigSum2 = (nums: number[]): number[] => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }  
    return nums;
  };



const nums: Array<number> = [3, 1, 2, 10, 1];

console.log(runnigSum2(nums));


/**
 * 1672. Richest Customer Wealth
 *
 * Input: acoutns =[[1,2,3],[1,2,3]]
 * Output: 6
 * Explenation:
 * 1st customer has wealth = 1 + 2 + 3 = 6
 * 2nd customer has wealth = 3 + 2 + 1 = 6
 * Both customers are considered the richest with a wealth of 6 each, so return 6.
 *
 *
 */

/**
 *
 * @param accounts {number[][]}
 * @returns number
 */
const maximumWealth = (accounts: number[][]): number => {
  let maxWealthSoFar: number = 0;

  accounts.forEach((el) => {
    let currentCustomerWealth: number = 0;

    el.forEach((it) => {
        currentCustomerWealth += it;
    });

    maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth);
  });

  return maxWealthSoFar;
};

const acoutns = [
  [1, 5],
  [7, 3],
  [3, 5],
];

console.log(maximumWealth(acoutns));
