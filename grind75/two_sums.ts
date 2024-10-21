function twoSum(nums: number[], target: number): number[] {
  let addendsIndices: number[] = [];
  let hit: boolean = false;

  for (let i1 = 0; i1 < nums.length - 1; i1++) {
      if (hit) {break;}
      // if ( nums[i1] > target) {
      //     // No sum will be possible, skip. Or already found a hit
      //     continue;
      // }
      // Start testing sums at the next index
      for (let i2 = i1 + 1; i2 < nums.length; i2++ ) {
          if ( nums[i1] + nums[i2] === target ) {
              addendsIndices[0] = i1;
              addendsIndices[1] = i2;
              break;
          }
      }

      // Check if target has been found using indices array length
      hit = (addendsIndices.length == 2) ? true : false;
  }

  return addendsIndices;
};