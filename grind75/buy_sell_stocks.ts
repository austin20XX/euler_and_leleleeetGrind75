// Similar to the maximum subarray problem I recently did, except with difference not summation
// Sliding window

function maxProfit(prices: number[]): number {
  if(prices.length <= 2 ) {
      let diff = (prices.length == 1 ? 0 : prices[1] - prices[0]);
      return Math.max(diff, 0);
  }

  const idealTransaction: {buyDay: number, sellDay: number, difference: number} = 
      {
          buyDay: 0,
          sellDay: 1,
          difference: prices[1] - prices[0],
      };

  let left = 0, right;
  // The length at this point is confirmed to be at least 3
  for(right = 1; right < prices.length; right++) {
      const { difference } = idealTransaction
      if(prices[left] > prices[right]) {
          left = right;
      } else if(prices[right] - prices[left] > difference){
          idealTransaction.sellDay = right;
          idealTransaction.buyDay = left;
          idealTransaction.difference = prices[right] - prices[left];
      }
  }

  // Check if there was a profitable transaction
  return Math.max(idealTransaction.difference, 0);
};

/** Notes:
 * In my previous solution, I was using the buyDay as the left pointer for the 'window'(not a real window). i(now right) was the right ptr
 * This is problematic because if a new lowest value occurs later in the array, the buyDay is updated
 * But it is not guaranteed that a greater diffence will be found after said value.
 * For example, in the test case [7, 2, 6, 7, 9, 1, 6]
 * The greatest diff is between indexes 1 & 4 with 7
 * But the buyDay will end up being index 5, since 1 is less than 2. 
 * There is no greater profit to be made after that though, so the object becomes incorrect
 * 
 * Solution: Use seperate left pointer and only update buyDay max diff is found
 */