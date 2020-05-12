const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = Math.max.apply(null, arr1);

arr2 = [...arr1];  // Change this line

console.log(arr2);
