// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

const factorial = num => {
  // negative integers and ints above 12 not included
  if(num < 0 || num > 12){
     throw new RangeError
  }
  let result = 1;
  for(let i = num; i > 0; i--){
    result *= i
  }
  return result
}
