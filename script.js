function decimalToBinary(num) {
  //Write you code here
	if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    return "Invalid input. Please enter a positive integer.";
  }

  // Handle the special case of 0 separately
  if (num === 0) {
    return "0";
  
}

window.decimalToBinary = decimalToBinary;
