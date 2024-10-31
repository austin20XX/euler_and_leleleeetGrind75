function merge(intervals: number[][]): number[][] {
  // I assumed it was sorted, but this is not the case...
  intervals.sort((a,b) => { return a[0] - b[0]});

  // Attempt 2
  // Now at this point, I should treat the process like a 'reducer' of sorts.
  // If current element is overlapping the previous
  // Merge it with the previous

  // Because we're looking backwards for reduction, good to start with an element in the returned array
  // the given intervals array is guaranteed to be of at least length 1
  const mergedIntervals: [start: number, end: number][] = [[intervals[0][0], intervals[0][1]]];
  //Different types so cant directly insert. slightly annoying but I believe mine is the correct type(tuple)!

  for(let i = 1; i < intervals.length; i++) {
      // Check for overlap, by checking is current interval[i] start less than previous intervals end
      // Since we sorted the intervals array, we know that current start is already greater than the previous start,
      // Thus it's not possible that the interval will start & end b4 the prior interval
      const mostRecentInterval = mergedIntervals[mergedIntervals.length - 1];
      const currentInterval = intervals[i];

      if(currentInterval[0] <= mostRecentInterval[1]) {
          // Since the start are sorted, we just need to update the intervals end
          mostRecentInterval[1] = Math.max(currentInterval[1], mostRecentInterval[1]);
      } else {
          mergedIntervals.push([currentInterval[0], currentInterval[1]]);
      }
  }
  
  return mergedIntervals;
  
  /** 
  Attempt 1, this joint just aint working out. Cryptic. . Ignores the previously merged intervals when comparing which is a big mistake. Not good at catching edge cases

  let didMergeFinalInterval = false;

  for(let i=0; i < intervals.length - 1;i++) {
      const currentInterval = intervals[i];
      const nextInterval = intervals[i+1];
      if(currentInterval[1] >= nextInterval[0]) {
          mergedIntervals.push(
              [Math.min(currentInterval[0], nextInterval[0]), 
              Math.max(currentInterval[1], nextInterval[1])]);
          didMergeFinalInterval = (i === intervals.length - 2);
          // Double increase the index so the next interval isnt merged in
      }
      else {
          // B/c I'm using a defined tuple instead of number[],
          // currentInterval cannot directly be pushed on. Needs slight transformation
          mergedIntervals.push([currentInterval[0],currentInterval[1]]);
      }
  }

  if(!didMergeFinalInterval) {
      const finalInterval = intervals[intervals.length - 1];
      mergedIntervals.push([finalInterval[0], finalInterval[1]]);
  } **/

};