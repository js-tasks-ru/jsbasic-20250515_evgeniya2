function factorial(n) {
  // Handle special cases
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  // Multiply all numbers from n down to 1
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  
  return result;
}
