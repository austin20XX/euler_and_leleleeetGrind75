/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
  const isPreviousVersionGood = (afterVersion: number):boolean => {
      return !(isBadVersion(afterVersion - 1));
  }

  const isNextVersionBad = (beforeVersion: number): boolean => {
      return isBadVersion(beforeVersion + 1);
  }

  return function(n: number): number {
      // Round up because versions start at 1
      if(isBadVersion(1)) {
          return 1;
      } else if(isPreviousVersionGood(n)) {
          return n;
      }

      let version = Math.ceil(n/2);
      let previousCheckedVersion = n;

      // Binary search, there is a guaranteed bad version so no condition necessary
      while(1) {               
          const temp = version;
          if(isBadVersion(version)) {
              if(isPreviousVersionGood(version)) {
                  return version;
              } 
              // Go Left
              version-= Math.ceil(Math.abs(version - previousCheckedVersion)/2);
              previousCheckedVersion = temp;
          } else {
              if(isNextVersionBad(version)) {
                  return version + 1;
              }
              // Go right
              version+= Math.ceil(Math.abs(version - previousCheckedVersion)/2);
              previousCheckedVersion = temp;
          }
      }
  };
};