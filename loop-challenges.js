
// **PROBLEM 1**
/*Print odds 1-20
Using a loop write code that will console.log all of the odd values from 1 up to 20. */

for (var i = 1; i < 21; i+=1) {
  console.log(i);
}

// Problem 2
/* Decreasing Multiples of 3
Using a loop write code that will console.log all of the values
that are evenly divisible by 3 from 100 down to 0.*/

for (var i = 100; i > 0; i--) {
  if(i%3 == 0) {
    console.log(i);
  }
}

// Problem 03

/* Print the sequence
Using a loop write code that will console.log the values in this 
sequence 4, 2.5, 1, -0.5, -2, -3.5*/

for (var i = 4; i > -20;i += -1.5) {
  console.log(i);
}


// Problem 04 Sigma 

// add sums from 1 to 100 and result should be 5050

var sum = 0;
for ( var i = 1; i < 101; i++) {
  sum = sum+i;
}
console.log(sum);

// Problem 05
//Factorial of 12 and result should be 479001600

var product = 1;
for ( var i = 1; i < 13; i++) {
  product *= i;
}
console.log(product);