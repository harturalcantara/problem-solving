function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    const length = arr.length;

    // Iterate through the array to count positive, negative, and zero elements
    arr.forEach(element => {
        if (element > 0) {
            positiveCount++;
        } else if (element < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    });

    // Calculate fractions
    const positiveFraction = positiveCount / length;
    const negativeFraction = negativeCount / length;
    const zeroFraction = zeroCount / length;

    // Print fractions to the console
    console.log(positiveFraction.toFixed(6));
    console.log(negativeFraction.toFixed(6));
    console.log(zeroFraction.toFixed(6));
}

const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);