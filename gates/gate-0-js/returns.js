// Temperature Conversion
// F = C x 1.8 + 32
function celciusToFahrenheit(celcius) {
  return celcius * 1.8 + 32;
}

console.log(celciusToFahrenheit(0)); // Should return 32

// Word Length Checker
function isLongWord(string) {
  if (!string) return false;

  string.split("");

  if (string.length >= 7) {
    return true;
  }

  return false;
}

console.log(isLongWord("JavaScript")); // Should return true
console.log(isLongWord("Hello")); // Should return false

// Calculate total with tip
function calculateTotalWithTip(billAmount, tipPercentage) {
  if (
    !tipPercentage ||
    isNaN(tipPercentage) ||
    !billAmount ||
    isNaN(billAmount)
  )
    return;

  return calculatePercentage(tipPercentage) * billAmount + billAmount;
}

// Helper Function for Calculate total with tip
function calculatePercentage(n) {
  if (n) {
    return n / 100;
  }
}

console.log(calculateTotalWithTip(50, 20)); // Should return 60

// Get last element in an array
function getLastElementInArray(arr) {
  if (!Array.isArray(arr)) return;

  return arr.pop();
}

console.log(getLastElementInArray([10, 20, 30, 40, 50, 60, 70])); // Should return 70
