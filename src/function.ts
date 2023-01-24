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
