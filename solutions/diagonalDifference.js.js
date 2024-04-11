function diagonalDifference(arr) {
    let n = arr.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    
    // Iterate through the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Add elements on the primary diagonal (i === j)
            if (i === j) {
                primaryDiagonalSum += arr[i][j];
            }
            // Add elements on the secondary diagonal (i + j === n - 1)
            if (i + j === n - 1) {
                secondaryDiagonalSum += arr[i][j];
            }
        }
    }
    
    // Calculate the absolute difference between the sums
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

// Example input
const exampleInput = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Call the function with the example input
console.log(diagonalDifference(exampleInput));
