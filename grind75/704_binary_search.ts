function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  let middle;
  while( high >= low ) {
      // Use floor b/c we are checking indexes and need to check 0
      middle = low + Math.floor((high - low)/2);
      console.log(nums[middle]);
      if(nums[middle] == target) {
          return middle;
      } else if(nums[middle] < target) {
          // too small, Shrink subarray to only right side(larger) values
          low = middle + 1;
      }
      else {
          // Shrink subarray to only right side values, i.e go left
          high = middle - 1;
      }
  }

  return -1;
};