function steamrollArray(arr) {
  var flattenedArray = [];

  var flatten = (arg) => {
    if (Array.isArray(arg)) {
      for (var i in arg) {
        flatten(arg[i]);
      }
    } else {
      flattenedArray.push(arg);
    }
  };

  arr.forEach(flatten);
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
