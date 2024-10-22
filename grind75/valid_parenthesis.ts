// const PARENTHESIS_OPTIONS = Object.freeze({
//   parenthesis: { opening: '(', closing: ')'},
//   curlyBraces: { opening: '', closing: ''},
//   brackets: { opening: '[', closing: ']'}
// });

// const PARENTHESIS_OPTIONS_ARRAY: readonly [opening: string, closing: string][] = [
//     ['(',')'],
//     ['[',']'],
//     ['{','}'],
// ]

// by arranging into tuple of two arrays, array methods can easily be used to search for braces. Downside is that order in the two arrays are critical
const VALID_PARENTHESIS: readonly [openingBraces: string[], closingBraces: string[]] = [
  ['(','{','['],
  [')','}',']']
]

function isValid(s: string): boolean {
  let isValid: boolean = true;

  // If string length isn't even, cant be bracket balanced
  if(s.length % 2 != 0) {
      return false;
  }

  const openingBracesQueue: string[] = [];

  for (let brace of s) {
      if(isValidOpeningBrace(brace)) {
          openingBracesQueue.push(brace);
      } else if(isValidClosingBrace(brace)) {
          const mostRecentOpeningBrace = openingBracesQueue.pop();
          const matchingOpeningBrace = VALID_PARENTHESIS[0][VALID_PARENTHESIS[1].indexOf(brace)];

          let match = mostRecentOpeningBrace === matchingOpeningBrace;
          if(!match) {
              isValid = false;
              break;
          }
      } else {
          isValid = false;
          break;
      }
  }
  // Make sure all opening braces have been closed
  if(openingBracesQueue.length != 0) {
      isValid = false;
  }
  return isValid;
};

function isValidOpeningBrace(brace: string): boolean {
  const index = VALID_PARENTHESIS[0].indexOf(brace);

  return (index != -1 ? true : false);
}

function isValidClosingBrace(brace: string): boolean {
  const index = VALID_PARENTHESIS[1].indexOf(brace);

  return (index != -1 ? true : false);
}