// Temperature Conversion
// F = C x 1.8 + 32
const celciusToFahrenheit = (celcius) => {
  return celcius * 1.8 + 32;
};

console.log(celciusToFahrenheit(0)); // Should return 32

// Word Length Checker
function isLongWord(string) {
  if (!string) return false;

  let split = string.split("");

  if (split.length >= 7) {
    return true;
  }

  return false;
}

console.log(isLongWord("JavaScript")); // Should return true
console.log(isLongWord("Hello")); // Should return false

// Calculate total with tip
function calculateTotalWithTip(billAmount, tipPercentage) {
  if (isNaN(tipPercentage) || isNaN(billAmount)) return;

  return calculatePercentage(tipPercentage) * billAmount + billAmount;
}

// Helper Function for Calculate total with tip
const calculatePercentage = (n) => n / 100;

console.log(calculateTotalWithTip(50, 0));

const nums = [10, 20, 30];

// Get last element in an array
const getLastElementInArray = function (arr) {
  if (!Array.isArray(arr)) return;

  return arr[arr.length - 1];
};

console.log(getLastElementInArray(nums)); // Should return the last number

const returnUndefined = () => {};

console.log(returnUndefined()); // Should return undefined
