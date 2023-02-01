/**
 * 412. Fizz Buzz
 * Given an integer n, return a string array answer (1-indexed) where:
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 */

export const fizzBuzz = (n: number): string[] => {
  let answer: string[] = [];

  for (let i = 1; i <= n; i++) {
    let divisibleBy3 = i % 3 === 0;
    let divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      answer.push("FizzBuzz");
    } else if (divisibleBy3) {
      answer.push("Fizz");
    } else if (divisibleBy5) {
      answer.push("Buzz");
    } else {
      answer.push(i.toString());
    }
  }

  return answer;
};

/**
 * 1342. Number of Steps to Reduce a Number to Zero
 *
 * Given an integer num, return the number of steps to reduce it to zero.
 *
 * In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 *
 */
export const numberOfSteps = (num: number): number => {
  let steps: number = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }
    steps++;
  }

  return steps;
};
