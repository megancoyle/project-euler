// Smallest multiple
// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var divisibleNumber = 20;
var checkNumber = 1;
var complete = false;

while (complete == false){
  for (i = 1; i <= divisibleNumber; i++) {
    if (checkNumber % i !== 0) {
      break;
    }
    if (i === divisibleNumber){
      complete = true;
      console.log(checkNumber);
    }
  }
  checkNumber++;
}

// answer is 232792560
