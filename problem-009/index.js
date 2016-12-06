// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function pythagorean(number) {
  var numArray = new Array();
  var c;

    for (var i = 1; i <= number/2 - 2; i++) {
      for (var j = i; j <= number/2 - 1; j++) {
        c = number - i - j;

        if (! ((c > j)  && (i < j)) )  {
          continue;

        } else if ( Math.pow(i,2) + Math.pow(j,2) == Math.pow(c,2) ) {
          numArray = [];
          numArray = [i, j, c];
          }
      }
    }
    return numArray;
}

    var product = 1;
    var result = pythagorean(1000);
    for ( var i in result ) {
        product *= result[i];
    }

    console.log(product);

// answer is 31875000
