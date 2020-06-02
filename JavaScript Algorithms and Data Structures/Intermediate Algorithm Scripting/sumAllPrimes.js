function sumPrimes(num) {
  let i = 1;
  let sum = 0;

  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }

  return sum;
}

function isPrime(val) {
  for (let i = 2; i < val; i++) {
    if (val % i === 0) {
      return false;
    }
  }

  return val !== 1 && val !== 0;
}

sumPrimes(10);
