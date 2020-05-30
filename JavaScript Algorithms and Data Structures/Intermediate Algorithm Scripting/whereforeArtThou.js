function whatIsInAName(collection, source) {
  // Only change code below this line
  var srcKeys = Object.keys(source);

  return collection.filter((obj) => {
    return srcKeys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  // Only change code above this line
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
