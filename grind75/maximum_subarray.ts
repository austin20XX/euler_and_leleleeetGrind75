interface subArraySum {
  sum: number,
  array: number[], 
  subarray: [startIndex: number, endIndex: number]
};

function maxSubArray(nums: number[]): number {
  let sum = nums[0];
  if(nums.length === 1) {
      return sum;
  }

  let beginningIndex = 0, endIndex = 0;
  const highestSubarray: subArraySum = { sum: sum, array: nums, subarray: [beginningIndex, endIndex] };

  // Only the end index increments at a constant rate. 
  // The beginning index should be updated based on if the numbers before it help the largest sum(are non negative)
  for(endIndex = 1; endIndex <= nums.length - 1; endIndex++) {

      // Sum check above zero first
      // Originally I put it at the end, but this is incorrect b/c leads to the last index not being solo checked. 
      // Plus placing at the end leads to unnecesary sum testing since the sum may already be below zero
      if(sum <= 0) {
          beginningIndex = endIndex;
          sum = 0;
      }
      sum += nums[endIndex];

      if(sum > highestSubarray.sum) {
          highestSubarray.sum = sum;
          highestSubarray.subarray = [beginningIndex, endIndex];
      }
  }

  console.log(highestSubarray.subarray[0] + ' ' + highestSubarray.subarray[1]);
  return highestSubarray.sum;
};