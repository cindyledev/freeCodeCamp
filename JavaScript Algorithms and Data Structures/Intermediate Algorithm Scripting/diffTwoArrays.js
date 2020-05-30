function diffArray(arr1, arr2) {
  var newArr = [];

  function inFirst(first, second) {
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }

  inFirst(arr1, arr2);
  inFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
