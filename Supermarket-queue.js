function queueTime(customers, n) {
  
  // Make an array containing n amount of elements, 
  // n representing the number of tills, 
  // and fill with zeroes
  let registers = new Array(n).fill(0);

  // Iterate through the customers 
  for (let time of customers) {
    
    // Find the till that has the least time
    let index = registers.indexOf(Math.min(...registers));
    
    // Add the time, representing the customer to
    // the till that has the least time
    registers[index] += time;
  }
  
  // Return the till that has the longest wait time
  // This is the required time to get all customers
  // through the que.
  return Math.max(...registers);
}
