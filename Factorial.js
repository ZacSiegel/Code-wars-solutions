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
