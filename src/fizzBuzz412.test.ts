import { fizzBuzz,numberOfSteps } from "./fizzBuzz412";
import { expect, test } from "vitest";

test("fizzBuzz ", () => {
  //Example 1
  //Input: n = 3
  const input: number = 3;
  // Output: ["1","2","Fizz"]
  const output: string[] = ["1", "2", "Fizz"];

  expect(fizzBuzz(input)).toEqual(output);
});



test("fizzBuzz 2 ", () => {
    //Example 2
    //Input: n = 5
    const input: number = 5;
    // Output: ["1","2","Fizz","4","Buzz"]
    const output: string[] = ["1","2","Fizz","4","Buzz"];
  
    expect(fizzBuzz(input)).toEqual(output);
  });
  

  test("fizzBuzz 3 ", () => {
    //Example 2
    //Input: n = 15
    const input: number = 15;
    // Output: ["1","2","Fizz","4","Buzz"]
    const output: string[] = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"];
  
    expect(fizzBuzz(input)).toEqual(output);
  });
  

  test("numberOfSteps  ", () => {
    //Example 1
    //Input: n = 14
    const input: number = 14;
    // Output: 6
    const output: number =6;
  
    expect(numberOfSteps(input)).toEqual(output);
  });
  