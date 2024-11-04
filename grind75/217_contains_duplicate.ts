function containsDuplicate(nums: number[]): boolean {
  const numbersMap = new Map<number, number>();

  for(let i = 0; i < nums.length; i++) {
      const num = nums[i];

      if(numbersMap.has(num)) {
          return true;
      } else {
          numbersMap.set(num, 1);
      }
  }
  return false;
};