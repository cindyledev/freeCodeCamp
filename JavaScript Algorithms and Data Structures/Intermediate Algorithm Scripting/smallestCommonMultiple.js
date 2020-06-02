function smallestCommons(arr) {
  // Sort array from largest to smallest
  arr.sort((a, b) => {
    return b - a;
  });

  // Create new array to hold all values from largest to smallest
  var newArr = [];

  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed outside of loops
  var quot = 0;
  var loop = 1;
  var n;

  // Do while n is not the same as array length
  do {
    quot = newArr[0] * loop * newArr[1];

    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

smallestCommons([1, 5]);
