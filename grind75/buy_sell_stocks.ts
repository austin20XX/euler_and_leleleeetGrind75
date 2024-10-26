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

  // The length at this point is confirmed to be at least 3
  for(let i = 1; i < prices.length; i++) {
      const { buyDay, sellDay, difference } = idealTransaction
      if(prices[buyDay] > prices[i]) {
          idealTransaction.buyDay = i;
      } else if(prices[i] - prices[buyDay] > difference){
          idealTransaction.sellDay = i;
          idealTransaction.difference = prices[i] - prices[buyDay];
      }
  }

  // Check if there was a profitable transaction
  return Math.max(idealTransaction.difference, 0);
};

/** Notes:
 * In my solution, I am using the buyDay as the left pointer for the 'window'(not a real window). i is the right ptr
 * This is problematic because if a new lowest value occurs later in the array, the buyDay is updated
 * But it is not guaranteed that a greater diffence will be found after said value.
 * For example, in the test case [7, 2, 6, 7, 9, 1, 6]
 * The greatest diff is between indexes 1 & 4 with 7
 * But the buyDay will end up being index 5, since 1 is less than 2. 
 * There is no greater profit to be made after that though
 * 
 * Solution: Use seperate left pointer and only update buyDay max diff is found
 */