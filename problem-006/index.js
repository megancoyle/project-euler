// Sum square difference
// Problem 6
// The sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumOfSq(number) {
        var sum = 0;
        for (i = 1; i <= number; i++) {
            sum += Math.pow(i, 2);
        }
        return sum;
    }

    function sqs(number) {
        var sum = 0;
        for (i = 1; i <= number; i++) {
            sum += i;
        }
        return Math.pow(sum, 2);
    }

    console.log((sqs(100) - sumOfSq(100)));

// answer is 25164150
