var n = +prompt("Enter number...: ");

function checker(n) {
  let isPrime = true;
  if (n === 1) {
    return "1 is neither prime nor composite...";
  } else if (n < 1) {
    return "Numbers lesser than 1 can not be prime numbers...";
  } else {
    for (i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return "It is a prime number...";
    } else {
      return "It is not a prime number...";
    }
  }
}

alert(checker(n));