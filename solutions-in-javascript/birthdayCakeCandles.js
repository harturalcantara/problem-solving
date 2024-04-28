function birthdayCakeCandles(candles) {
    // Find the maximum height among the candles
    const maxHeight = Math.max(...candles);
  
    // Count the number of candles with the maximum height
    const tallestCandleCount = candles.filter(candle => candle === maxHeight).length;
  
    return tallestCandleCount;
  }
  
  // Example usage:
  const candleHeights = [4, 4, 1, 3, 4];
  const result = birthdayCakeCandles(candleHeights);
  console.log(result); // Output should be 3 because there are three candles with the height of 4
  