function uniteUnique(...arr) {
  var result = [];

  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      if (result.indexOf(indexValue) < 0) {
        result.push(indexValue);
      }
    }
  }

  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
