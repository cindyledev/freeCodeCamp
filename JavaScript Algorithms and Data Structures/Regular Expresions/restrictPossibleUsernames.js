let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);

// ^ = start of input
// [a-z] = first character is a letter
// [0-9][0-9]+ = ends with two or more numbers
// | = or
// [a-z]+ = has one or more letters next
// \d* = ends with zero or more numbers
// $ = end anchor
// i = ignore casing
