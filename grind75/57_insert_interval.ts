function insert(intervals: number[][], newInterval: number[]): number[][] {
  // Not guaranteed to be non empty
  if(intervals.length == 0) {
      return [newInterval];
  }

  // This will be very similar to leet 56 if you can insert the interval at it's sorted order

  // Find correct place for insertion & insert
  let index = 0;
  while(index < intervals.length && intervals[index][0] <= newInterval[0] ) {
      index++;
  }
  intervals.splice(index, 0, newInterval);


  // See Leet 56
  const newIntervalsArray: number[][] = [intervals[0]];
  for(let i = 1; i < intervals.length; i++) {
  const mostRecentInterval = newIntervalsArray[newIntervalsArray.length - 1];
  const currentInterval = intervals[i];
      if(currentInterval[0] <= mostRecentInterval[1]) {
          mostRecentInterval[1] = Math.max(currentInterval[1], mostRecentInterval[1]);
      } else {
          newIntervalsArray.push(currentInterval);
      }
  }

  return newIntervalsArray;
};

// This solution is consistently slower than other submissions though... Probably opportunity for speed up.
// One option might be to init the newIntervalsArray with a sliced version of the intervals up to 'index', then start the reduction at index? 
// Come back