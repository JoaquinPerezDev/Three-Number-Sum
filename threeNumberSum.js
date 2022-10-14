//Write a function that takes in a non-empty array of distinct intergers and an interger representing the target sum. The function should find all triplets in the array that = targetSum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order and the triplets themselves should be ordered in ascending order. If no three numbers sum up to the targetSum, return empty array.

//Sample input: array = [12, 3, 1, 2, -6, 5, -8, 6] targetSum = 0
//Sample output: tripletsArr = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

//Brute force: Doing a triple for loop. By iterating through the array three loops deep, we can find every combination of values that sum to equal the targetSum. If we find triplets equal to targetSum, we push it to the results array in the order in which they were summed.

//This approach however would produce O(n^3) cubic time complexity which is significantly slower than other more efficient approaches. We'll skip this one and go straight into the more optimal approach.

// Anchor and two pointers. The idea is very similar to the above one, as well as similar approach to the Two Number Sum problem. In this case though, we want to first sort the array in ascending order. Then, we'll loop through the array, establishing array[0] to be our anchor, array[1] is our left pointer and array.length - 1(the last index in the array) to be our right pointer. And while the value of the left pointer is less than the value of the right pointer, we can now check if the sum of these three values equals targetSum. If it does, we add these values as an array, to the result array in the order we added them(i.e. [array[anchor], array[left], array[right]]). Lastly, we shift the anchor and the left pointer one position to the right. If this isn't the case and the sum of the three values is less than the targetSum, then we move the left pointer one position to the right and try again. Otherwise, if the sum of the three values is greater than the targetSum, we shift the right pointer one position to the left and try again. The loop will finish when we find all possible triplets, then return the result array.

//O(n^2) time | O(n) space Complexity
function threeNumberSum(array, targetSum) {
  // Write your code here.
  let result = [];
  let sorted = array.sort((a, b) => a - b);

  for (let anchor = 0; anchor < sorted.length; anchor++) {
    if (array[anchor] >= targetSum) {
      break;
    }

    let left = anchor + 1;
    let right = sorted.length - 1;

    while (left < right) {
      let currentSum = sorted[anchor] + sorted[left] + sorted[right];
      if (currentSum === targetSum) {
        result.push([sorted[anchor], sorted[left], sorted[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
