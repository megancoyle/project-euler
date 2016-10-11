// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

var numberCheck = 999 * 999;
var numberStr, numberStrReversed, sqrt, divisor;

while (numberCheck > 100000) {
  numberStr = numberCheck + '';
  numberStrReversed = numberStr.split('').reverse().join('');
  if (numberStr === numberStrReversed) {
    sqrt = Math.sqrt(numberCheck);
    divisor = Math.floor(sqrt);
    while (numberCheck % divisor !== 0 && divisor >= 100 && numberCheck / divisor <= 999) {
      divisor--;
    }
    if (numberCheck % divisor === 0 && divisor >= 100 && numberCheck / divisor <= 999) {
      console.log(numberCheck);
      return;
    }
  }
  numberCheck--;
}

// answer is 906609
