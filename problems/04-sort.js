/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.
Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.
There are many ways to accomplish this task but here's a simple algorithm:
1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`
Examples:
sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/


function sort(nums, sorted = []) {
// Base Case: if 'nums' is empty, return 'sorted'
    if (nums.length === 0) {
        return sorted;
    }
// Find the smallest element in 'nums'
    let smallest = Math.min(...nums);
// Add the smallest element to the end of the 'sorted' array
    sorted.push(smallest);
// Remove the smallest element from 'nums'
    nums.splice(nums.indexOf(smallest), 1);
// Recursively call 'sort()' with updated 'sorted' and 'nums'
    return sort(nums, sorted);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
