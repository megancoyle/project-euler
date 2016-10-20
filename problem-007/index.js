// 10001st prime
// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

function findPrimeNumber(numberCheck) {
  var prime= [2], n= 3, divisor, i, limit,isPrime;
    while(prime.length < numberCheck){
        divisor = 3, i = 1;
        limit = Math.sqrt(n) + 1;
        isPrime = true;
        
        while(divisor < limit){
            if(n % divisor === 0){
                isPrime = false;
                divisor = limit;
            } else {
              divisor = prime[i++] || divisor + 2;
            }
        }

        if(isPrime) {
          prime.push(n);
        }
        n += 2;
    }
    return prime[prime.length-1];
}

console.log(findPrimeNumber(10001));

// answer is 104743
