function staircase(n) {
    for (let i = 1; i <= n; i++) {
      // Calculate spaces for right alignment
      const spaces = ' '.repeat(n - i);
      // Calculate hashes for this row
      const hashes = '#'.repeat(i);
      // Print the row with right alignment
      console.log(spaces + hashes);
    }
  }
  
  // Test with n = 6
  staircase(6);
  