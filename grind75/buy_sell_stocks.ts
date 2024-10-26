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