/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let largest = nums[0]
    let secondlargest = nums[0]
    
    for (let i = 1; i < nums.length; i++ ){
      if (nums[i]> largest){
        secondlargest = largest;
        largest = nums[i]
      }
      
      if (nums[i]> secondlargest && largest > nums[i]){
        secondlargest = nums[i]
      }
    }
    return secondlargest;
}

const result = getSecondLargest([2, 1, 5, 3, 6, 4, 8, 7, 9, 10])

console.log(result);
