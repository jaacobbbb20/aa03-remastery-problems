/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!
Examples:
sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/


function sumArray(arr) {
// We need a base case since it is a recursive function: if the array is empty return 0
  if (arr.length === 0) {
    return 0;
  }
// The recurisve case: Takes the first element and adds it to the sum to the rest of the array
  return arr[0] + sumArray(arr.slice(1));
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
