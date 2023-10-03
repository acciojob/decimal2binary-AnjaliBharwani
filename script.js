function decimalToBinary(num) {
  //Write you code here
	if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    return "Invalid input. Please enter a positive integer.";
  }

  // Handle the special case of 0 separately
  if (num === 0) {
    return "0";
  
}
	if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    return "Invalid input. Please enter a positive integer.";
  }

  // Handle the special case of 0 separately
  if (num === 0) {
    return "0";
  }

  // Initialize an empty string to store the binary representation
  let binary = "";

  // Loop to convert the decimal number to binary
  while (num > 0) {
    // Append the least significant bit (LSB) of the number to the binary string
    binary = (num % 2) + binary;
    // Divide the number by 2 to shift to the next bit
    num = Math.floor(num / 2);
  }

  return binary;
}


window.decimalToBinary = decimalToBinary;
