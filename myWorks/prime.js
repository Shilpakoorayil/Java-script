//Write a function to check whether a given number is prime or not.
function isPrime(num) {
  // Numbers less than or equal to 1 are not prime
  if (num <= 1) {
    return false;
  }

  // 2 is the only even prime number
  if (num === 2) {
    return true;
  }

  // If the number is even and greater than 2, it's not prime
  if (num % 2 === 0) {
    return false;
  }

  // Check for divisibility by odd numbers from 3 up to the square root of num
  // We only need to check up to the square root because if a number has a divisor
  // greater than its square root, it must also have a divisor smaller than its square root.
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    console.log("......");
    console.log("enter into loop");
    console.log(i);
    console.log("......");
    
    
    
    if (num % i === 0) {
      return false; // If divisible, it's not prime
    }
  }

     console.log(num);
  return true; // If no divisors found, it's prime
}

// Example usage:
//console.log(isPrime(13));   // true
//console.log(isPrime(10));  // false
//console.log(isPrime(1));   // false
//console.log(isPrime(2));   // true
console.log(isPrime(97));  // true