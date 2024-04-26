function timeConversion(s) {
    // Extract the components from the input string
    const hour = parseInt(s.slice(0, 2), 10);
    const minute = s.slice(3, 5);
    const second = s.slice(6, 8);
    const period = s.slice(8, 10);
  
    let newHour;
  
    if (period === 'AM') {
      if (hour === 12) {
        newHour = '00';
      } else {
        newHour = hour.toString().padStart(2, '0');
      }
    } else if (period === 'PM') {
      if (hour === 12) {
        // 12 PM remains 12 in 24-hour format
        newHour = '12';
      } else {
        // For other PM times, add 12 to the hour
        newHour = (hour + 12).toString().padStart(2, '0');
      }
    }
  
    // Construct the new time string in 24-hour format
    const convertedTime = `${newHour}:${minute}:${second}`;
  
    return convertedTime;
  }
  
  // Example usage
  console.log(timeConversion("07:05:45PM")); // Output: "19:05:45"
  console.log(timeConversion("12:00:00AM")); // Output: "00:00:00"
  