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
