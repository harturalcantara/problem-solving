function minMaxSum(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    // Step 2: Calculate the minimum sum (sum of the first four elements)
    const minSum = arr.slice(0, 4).reduce((acc, val) => acc + val, 0);
  
    // Step 3: Calculate the maximum sum (sum of the last four elements)
    const maxSum = arr.slice(1, 5).reduce((acc, val) => acc + val, 0);
  
    // Step 4: Return the results as a space-separated string
    return `${minSum} ${maxSum}`;
  }
  
  // Example usage
  const fiveIntegers = [1, 2, 3, 4, 5];
  console.log(minMaxSum(fiveIntegers)); // Output: "10 14"
