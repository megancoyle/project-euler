// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

var setNumber = 600851475143;
var i = 2;

while (setNumber != i) {
  if(setNumber % i === 0) {
    setNumber = setNumber / i;
  }
  else {
    i++;
  }
}
console.log(i);

// answer is 6857
